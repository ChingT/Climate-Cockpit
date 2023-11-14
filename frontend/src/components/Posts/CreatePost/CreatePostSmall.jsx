import {
  Avatar,
  CreatePostCardContainer,
  WrapperDiv,
} from "./CreatePost.style.js";
import defaultAvatar from "../../../assets/svgs/avatar.svg";

import { useSelector } from "react-redux";
import CreatePostModal from "./CreatePostModal.jsx";
import {SaveButton} from "../Post/Modal.styles.js";

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
          <SaveButton style = {{width: "6rem"}}>
            New Post
          </SaveButton>
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
