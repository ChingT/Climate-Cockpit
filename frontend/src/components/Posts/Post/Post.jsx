import { useEffect, useState } from "react";
import {
  AuthorInfoWrapper,
  Avatar,
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
import ModalPost from "./ModalPost.jsx";
import SharedPost from "./SharedPost.jsx";
import CommentsSection from "../../Solution/CommentsSection.jsx";

const Post = ({ postData, setPostToShare, setShowCreatePostModal }) => {
  const userData = useSelector((store) => store.loggedInUser.user);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(postData.comments || []);
  const [postIsLiked, setPostIsLiked] = useState(postData.logged_in_user_liked);
  const [amountOfLikes, setAmountOfLikes] = useState(postData.amount_of_likes);
  const { sendRequest, data, error, loading } = useApiRequest();
  const sendRequest2 = useApiRequest();

  const handlePostComment = () => {
    if (!commentText.trim()) return;

    sendRequest("post", `social/comments/${postData.id}/`, {
      content: commentText,
    });
  };

  const handleClickLike = () => {
    sendRequest("post", `social/posts/toggle-like/${postData.id}/`);
    setPostIsLiked(!postIsLiked);
    postIsLiked
      ? setAmountOfLikes(amountOfLikes - 1)
      : setAmountOfLikes(amountOfLikes + 1);
  };

  const getCommentsOfPost = () => {
    sendRequest2.sendRequest("get", `social/comments/${postData.id}/?limit=3`);
  };

  const sharePost = () => {
    setPostToShare(postData);
    setShowCreatePostModal(true);
  };
  useEffect(() => {
    getCommentsOfPost();
    if (data && !error) {
      if (data.newComment) {
        setComments([...comments, data.newComment]);
        setCommentText("");
      }
    } else if (error) {
      console.error("An error occurred: ", error);
    }
  }, [data, error]);

  useEffect(() => {
    if (sendRequest2.data?.results) {
      console.log(sendRequest2.data.results);
      setComments(sendRequest2.data.results);
    }
  }, [sendRequest2.data]);

  console.log(sendRequest2.data);

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
          <EditButton onClick={() => setModalIsOpen(true)}>
            <img src={MenuDot} />
          </EditButton>
        )}
        {modalIsOpen && (
          <ModalPost postData={postData} onClose={setModalIsOpen} />
        )}
      </PostHeaderWrapper>
      <PostHeaderWrapper>
        <PostText onClick={() => setModalIsOpen(true)}>
          {postData.content}
        </PostText>
      </PostHeaderWrapper>
      <PostImageContainer onClick={() => setModalIsOpen(true)}>
        {postData.images.map((image) => (
          <PostImage key={image.id} src={image.image} alt={image.image} />
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
            <img src={shareArrow} alt="share Icon" />
            Share
          </PostActionButton>
        </PostActionWrapper>
        <LikeCount>{amountOfLikes} likes</LikeCount>
      </FooterContainer>

      <CommentsSection
        comments={comments}
        commentText={commentText}
        handleCommentChange={(e) => setCommentText(e.target.value)}
        postComment={handlePostComment}
      />
    </PostContainer>
  );
};

export default Post;
