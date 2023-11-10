import { useEffect, useState } from "react";
import {
  AuthorInfoWrapper,
  Avatar,
  BottomButtons,
  DeleteButton,
  EditButton,
  FooterContainer,
  LikeCount,
  PostActionButton,
  PostActionWrapper,
  PostContainer,
  PostHeaderWrapper,
  PostImage,
  PostImageContainer,
  PostText,
  ProfileLinkWrapper,
} from "./Post.style.js";
import likeHeart from "../../../assets/svgs/heart_rgb.png";
import shareArrow from "../../../assets/svgs/share.svg";
import defaultAvatar from "../../../assets/svgs/avatar.svg";
import { useSelector } from "react-redux";
import ReactTimeAgo from "react-time-ago";
import useApiRequest from "../../../hooks/useApiRequest.js";
import MenuDot from "../../../assets/svgs/menu.svg";
import trash from "../../../assets/images/delete.svg";
import ModalPost from "./ModalPost.jsx";
import SharedPost from "./SharedPost.jsx";
import EditPostModal from "./EditPosModal.jsx";

const Post = ({
  postData,
  setPostToShare,
  setShowCreatePostModal,
  setListOfPosts,
  listOfPosts,
}) => {
  const userData = useSelector((store) => store.loggedInUser.user);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [content, setContent] = useState(postData.content);
  const [postImages, setPostImages] = useState([...postData.images]);

  const [postIsLiked, setPostIsLiked] = useState(postData.logged_in_user_liked);
  const [amountOfLikes, setAmountOfLikes] = useState(postData.amount_of_likes);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const { sendRequest, data } = useApiRequest();

  const handleDeletePost = () => {
    sendRequest("delete", `social/posts/${postData.id}/`);
    setListOfPosts((current) =>
      current.filter((post) => post.id !== postData.id),
    );
  };

  const handleClickLike = () => {
    sendRequest("post", `social/posts/toggle-like/${postData.id}/`);
    setPostIsLiked(!postIsLiked);
    postIsLiked
      ? setAmountOfLikes(amountOfLikes - 1)
      : setAmountOfLikes(amountOfLikes + 1);
  };

  const handleEditPost = () => {
    setEditModalIsOpen(true);
  };

  const sharePost = () => {
    setPostToShare(postData);
    setShowCreatePostModal(true);
  };

  const handleSaveEdit = (editedContent, editedImages) => {
    let formData = new FormData();
    formData.append("content", editedContent);
    editedImages.forEach((image) => {
      console.log(image instanceof File);
      if (image instanceof File) {
        formData.append(`images`, image);
      } else if (typeof image === "string") {
        formData.append(`images`, image);
      }
    });

    sendRequest("patch", `social/posts/${postData.id}/`, formData, true);
    setContent(editedContent);
    setPostImages(editedImages);
    console.log(editedImages);
    setListOfPosts((current) =>
      current.map((post) =>
        post.id === postData.id
          ? { ...post, content: editedContent, images: editedImages }
          : post,
      ),
    );
  };

  useEffect(() => {}, [postImages]);

  return (
    <PostContainer>
      <PostHeaderWrapper>
        <ProfileLinkWrapper
          to={`/profile/${
            postData.user.id !== userData.id ? postData.user.id : ""
          }`}
        >
          <Avatar
            src={postData.user.avatar || defaultAvatar}
            className={!postData.user.avatar ? "default" : null}
          />
          <AuthorInfoWrapper>
            <p>{`${postData.user.first_name} ${postData.user.last_name}`}</p>
            <p className={"date"}>
              <ReactTimeAgo
                date={Date.parse(postData.created)}
                locale="en-US"
              />
            </p>
          </AuthorInfoWrapper>
        </ProfileLinkWrapper>
        {userData.id === postData.user.id && (
          <>
            <EditButton onClick={handleEditPost}>
              <img src={MenuDot} />
            </EditButton>
            {modalIsOpen && (
              <ModalPost
                postData={postData}
                onClose={() => setModalIsOpen(false)}
              />
            )}
            {editModalIsOpen && (
              <EditPostModal
                avatar={postData.user.avatar}
                postData={postData}
                onClose={() => setEditModalIsOpen(false)}
                handleSaveEdit={handleSaveEdit}
              />
            )}
          </>
        )}
      </PostHeaderWrapper>
      <PostHeaderWrapper>
        <PostText onClick={() => setModalIsOpen(true)}>{content}</PostText>
      </PostHeaderWrapper>
      <PostImageContainer onClick={() => setModalIsOpen(true)}>
        {postData.images.map((image) => (
          <PostImage key={image.id} src={image.image} alt={image.image} />
        ))}
      </PostImageContainer>
      {postData.shared && <SharedPost postData={postData.shared} />}
      <FooterContainer>
        <BottomButtons>
          <PostActionWrapper>
            <PostActionButton onClick={handleClickLike}>
              <img
                src={likeHeart}
                alt="like heart"
                className={postIsLiked ? "liked-post" : null}
              />
              {postIsLiked ? "Liked" : "Like"}
            </PostActionButton>
            <PostActionButton onClick={sharePost}>
              <img src={shareArrow} alt="share Icon" />
              Share
            </PostActionButton>
          </PostActionWrapper>
          {userData.id === postData.user.id && (
            <DeleteButton onClick={handleDeletePost}>
              <img src={trash} alt="delete post" />
              <p>Delete</p>
            </DeleteButton>
          )}
        </BottomButtons>
        <LikeCount>{amountOfLikes} likes</LikeCount>
      </FooterContainer>
    </PostContainer>
  );
};

export default Post;
