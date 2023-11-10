import { useState } from "react";
import {
  AuthorInfoWrapper,
  Avatar,
  FooterContainer,
  LikeCount,
  ModalPostContainer,
  PostActionButton,
  PostActionWrapper,
  PostContentContainer,
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
import Overlay from "../../Overlay/Overlay.jsx";

const ModalPost = ({ postData, onClose }) => {
  const userData = useSelector((store) => store.loggedInUser.user);

  const [postIsLiked, setPostIsLiked] = useState(postData.logged_in_user_liked);
  const [amountOfLikes, setAmountOfLikes] = useState(postData.amount_of_likes);
  const { sendRequest } = useApiRequest();
  const postHasImages = postData.images.length > 0;

  const handleClickLike = () => {
    sendRequest("post", `social/posts/toggle-like/${postData.id}/`);
    setPostIsLiked(!postIsLiked);
    postIsLiked
      ? setAmountOfLikes(amountOfLikes - 1)
      : setAmountOfLikes(amountOfLikes + 1);
  };

  return (
    <Overlay onClose={onClose}>
      <ModalPostContainer $hasImages={postHasImages}>
        {postHasImages && (
          <PostImageContainer>
            {postData.images.map((image, index) => (
              <PostImage key={index} src={image.image} alt={image.image} />
            ))}
          </PostImageContainer>
        )}
        <PostContentContainer>
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
          </PostHeaderWrapper>
          <PostText>{postData.content}</PostText>
          <FooterContainer>
            <LikeCount>{amountOfLikes} likes</LikeCount>
            <PostActionWrapper>
              <PostActionButton onClick={handleClickLike}>
                <img
                  src={likeHeart}
                  alt="like heart"
                  className={postIsLiked ? "liked-post" : null}
                />
                {postIsLiked ? "Liked" : "Like"}
              </PostActionButton>
              <PostActionButton>
                <img src={shareArrow} alt="share Icon" />
                Share
              </PostActionButton>
            </PostActionWrapper>
          </FooterContainer>
        </PostContentContainer>
      </ModalPostContainer>
    </Overlay>
  );
};

export default ModalPost;
