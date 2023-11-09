import { useState } from "react";
import { useSelector } from "react-redux";
import likeHeart from "../../../assets/svgs/heart_rgb.png";
import MenuDot from "../../../assets/svgs/menu.svg";
import shareArrow from "../../../assets/svgs/share.svg";
import useApiRequest from "../../../hooks/useApiRequest.js";
import ProfileLink from "../../ProfileLink/ProfileLink.jsx";
import CommentsSection from "../Comment/CommentsSection.jsx";
import ModalPost from "./ModalPost.jsx";
import {
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

const Post = ({ postData, setPostToShare, setShowCreatePostModal }) => {
  const userData = useSelector((store) => store.loggedInUser.user);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [postIsLiked, setPostIsLiked] = useState(postData.logged_in_user_liked);
  const [amountOfLikes, setAmountOfLikes] = useState(postData.amount_of_likes);
  const { sendRequest } = useApiRequest();

  const handleClickLike = () => {
    sendRequest("post", `social/posts/toggle-like/${postData.id}/`);
    setPostIsLiked(!postIsLiked);
    postIsLiked
      ? setAmountOfLikes(amountOfLikes - 1)
      : setAmountOfLikes(amountOfLikes + 1);
  };

  const sharePost = () => {
    setPostToShare(postData);
    setShowCreatePostModal(true);
  };

  return (
    <PostContainer>
      <PostHeaderWrapper>
        <ProfileLink
          user={postData.user}
          isLoggedInUser={postData.user.id === userData.id}
          created={postData.created}
        />

        {userData.id === postData.user.id && (
          <EditButton onClick={() => setModalIsOpen(true)}>
            <img src={MenuDot} alt="Edit Menu" />
          </EditButton>
        )}
        {modalIsOpen && (
          <ModalPost
            postData={postData}
            onClose={() => setModalIsOpen(false)}
          />
        )}
      </PostHeaderWrapper>
      <PostHeaderWrapper>
        <PostText onClick={() => setModalIsOpen(true)}>
          {postData.content}
        </PostText>
      </PostHeaderWrapper>
      <PostImageContainer onClick={() => setModalIsOpen(true)}>
        {postData.images.map((image) => (
          <PostImage
            key={image.id}
            src={image.image}
            alt={image.alt_text || "Post image"}
          />
        ))}
      </PostImageContainer>
      {postData.shared && <SharedPost postData={postData.shared} />}
      <FooterContainer>
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
            <img src={shareArrow} alt="share icon" />
            Share
          </PostActionButton>
        </PostActionWrapper>
        <LikeCount>{amountOfLikes} likes</LikeCount>
      </FooterContainer>

      <CommentsSection postId={postData.id} />
    </PostContainer>
  );
};

export default Post;
