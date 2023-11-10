import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import trash from "../../../assets/images/delete.svg";
import edit_post from "../../../assets/svgs/edit-image.svg";
import likeHeart from "../../../assets/svgs/heart_rgb.png";
import shareArrow from "../../../assets/svgs/share.svg";
import useApiRequest from "../../../hooks/useApiRequest.js";
import ProfileLink from "../../ProfileLink/ProfileLink.jsx";
import CommentsSection from "../Comment/CommentsSection.jsx";
import EditPostModal from "./EditPosModal.jsx";
import { StyledImg } from "./Modal.styles.js";
import ModalPost from "./ModalPost.jsx";
import {
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
} from "./Post.style.js";
import SharedPost from "./SharedPost.jsx";

const Post = ({
  postData,
  setPostToShare,
  setShowCreatePostModal,
  setListOfPosts,
}) => {
  const userData = useSelector((store) => store.loggedInUser.user);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [content, setContent] = useState(postData.content);
  const [postImages, setPostImages] = useState([...postData.images]);

  const [postIsLiked, setPostIsLiked] = useState(postData.logged_in_user_liked);
  const [amountOfLikes, setAmountOfLikes] = useState(postData.amount_of_likes);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const { sendRequest } = useApiRequest();

  const handleDeletePost = () => {
    sendRequest("delete", `social/posts/${postData.id}/`);
    setListOfPosts((current) =>
      current.filter((post) => post.id !== postData.id)
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
    console.log(editedImages);
    editedImages.forEach((image) => {
      formData.append(`images`, image.file);
    });

    sendRequest("patch", `social/posts/${postData.id}/`, formData, true);
    setContent(editedContent);
    setPostImages(editedImages);
    // setListOfPosts((current) =>
    //   current.map((post) =>
    //     post.id === postData.id
    //       ? { ...post, content: editedContent, images: editedImages }
    //       : post,
    //   ),
    // );
  };

  useEffect(() => {}, [postImages]);

  return (
    <PostContainer>
      <PostHeaderWrapper>
        <ProfileLink
          user={postData.user}
          isLoggedInUser={postData.user.id === userData.id}
          created={postData.created}
        />

        {userData.id === postData.user.id && (
          <>
            <EditButton onClick={handleEditPost}>
              <StyledImg src={edit_post} />
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
        {postImages.map((image) => (
          <PostImage
            key={image.id}
            src={image.image ? image.image : image.blob}
            alt={image.image}
          />
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

      <CommentsSection postId={postData.id} />
    </PostContainer>
  );
};

export default Post;
