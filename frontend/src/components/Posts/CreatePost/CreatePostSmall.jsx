import {
  Avatar,
  CreatePostCardContainer,
  SubmitButton,
  WrapperDiv,
} from "./CreatePost.style.js";
import defaultAvatar from "../../../assets/svgs/avatar.svg";

import { useSelector } from "react-redux";
import sendIcon from "../../../assets/svgs/send_button.svg";
import CreatePostModal from "./CreatePostModal.jsx";

const CreatePostSmall = ({
  postToShare,
  setModalIsOpen,
  modalIsOpen,
  setListOfPosts,
}) => {
  const userData = useSelector((store) => store.loggedInUser.user);

  return (
    <CreatePostCardContainer>
      {userData && (
        <WrapperDiv onClick={() => setModalIsOpen(true)}>
          <Avatar src={userData.avatar || defaultAvatar} />
          <p>What's on your mind, {userData.first_name}?</p>
          <SubmitButton>
            <img src={sendIcon} alt={sendIcon} />
          </SubmitButton>
        </WrapperDiv>
      )}
      {modalIsOpen && (
        <CreatePostModal
          setListOfPosts={setListOfPosts}
          userData={userData}
          setModalIsOpen={setModalIsOpen}
          postToShare={postToShare}
        />
      )}
    </CreatePostCardContainer>
  );
};

export default CreatePostSmall;
