import {useSelector} from "react-redux";
import styled from "styled-components";
import useAutoFetch from "../../hooks/useAutoFetch.js";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import FriendCard from "./FriendCard.jsx";
import {FriendsGridContainer} from "./FriendCard.style.js";

export const FindFriendsContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: ${(props) => props.theme.max_content_width};
  margin: 2rem auto 0;
`;

const FriendsGrid = ({ url }) => {
  const { data, loading } = useAutoFetch("get", url);
  const friendRequests = useSelector((store) => store.friendRequests);

  const checkRequest = (friendID) => {
    return friendRequests.find((request) => request.receiver.id === friendID);
  };

  return (
    <FindFriendsContainer>
      {loading && <LoadingSpinner />}
      <FriendsGridContainer>
        {data &&
          data.results.map((friend) => {
            return (
              <FriendCard
                key={friend.id}
                friendInfo={friend}
                requestObject={checkRequest(friend.id)}
              />
            );
          })}
      </FriendsGridContainer>
    </FindFriendsContainer>
  );
};

export default FriendsGrid;
