import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import send_icon from "../../../assets/images/send.png";
import trash from "../../../assets/images/delete-folder.png";
import useApiRequest from "../../../hooks/useApiRequest.js";
import useAutoFetch from "../../../hooks/useAutoFetch.js";
import ProfileLink from "../../ProfileLink/ProfileLink.jsx";
import {
  CommentBlock,
  CommentContent,
  CommentInput,
  CommentsContainer,
  DeleteSection,
  InputContainer,
  PostButton,
  StyledImg,
} from "./Comment.style.js";

const CommentsSection = ({ postId }) => {
  const userData = useSelector((store) => store.loggedInUser.user);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const { sendRequest: sendRequestPost, data: dataPost } = useApiRequest();
  const { sendRequest: sendRequestDelete } = useApiRequest();
  const handleCommentChange = (e) => setCommentText(e.target.value);

  const urlToFetch = `social/comments/${postId}/?limit=3`;
  const { data } = useAutoFetch("get", urlToFetch);
  useEffect(() => {
    if (data !== null) setComments(data.results);
  }, [data]);

  const handlePostButtonClick = () => {
    if (!commentText.trim()) return;

    sendRequestPost("post", `social/comments/${postId}/`, {
      content: commentText,
    });
    setCommentText("");
  };

  useEffect(() => {
    if (dataPost !== null) {
      setComments((currentComments) => [dataPost, ...currentComments]);
    }
  }, [dataPost]);

  const deleteComment = (commentId) => {
    sendRequestDelete("delete", `social/comments/comment/${commentId}/`);
    setComments((currentComments) =>
      currentComments.filter((comment) => comment.id !== commentId),
    );
  };

  return (
    <CommentsContainer>
      <InputContainer>
        <CommentInput
          value={commentText}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
        />
        <StyledImg src={send_icon} alt="Send" onClick={handlePostButtonClick} />
      </InputContainer>
      {comments.map((comment) => (
        <CommentBlock key={comment.id}>
          <ProfileLink
            user={comment.user}
            isLoggedInUser={comment.user.id === userData.id}
            created={comment.created}
          />

          <CommentContent>{comment.content}</CommentContent>
          <DeleteSection>
            {userData.id === comment.user.id && (
              <PostButton onClick={() => deleteComment(comment.id)}>
                <img src={trash} alt="delete post" />
                <p>Delete</p>
              </PostButton>
            )}
          </DeleteSection>
        </CommentBlock>
      ))}
    </CommentsContainer>
  );
};

export default CommentsSection;
