import { useEffect, useState } from "react";
import ReactTimeAgo from "react-time-ago";
import useApiRequest from "../../../hooks/useApiRequest.js";
import {
  CommentBlock,
  CommentContent,
  CommentInput,
  CommentsContainer,
  InputContainer,
  PostButton,
  UserName,
} from "./Comment.style.js";

const CommentsSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const { sendRequest: sendRequestGet, data: dataGet } = useApiRequest();
  const { sendRequest: sendRequestPost, data: dataPost } = useApiRequest();
  const { sendRequest: sendRequestDelete } = useApiRequest();
  const handleCommentChange = (e) => setCommentText(e.target.value);

  useEffect(() => {
    sendRequestGet("get", `social/comments/${postId}/?limit=3`);
  }, []);

  useEffect(() => {
    if (dataGet !== null) {
      setComments(dataGet.results);
    }
  }, [dataGet]);

  const handlePostButtonClick = () => {
    if (!commentText.trim()) return;

    sendRequestPost("post", `social/comments/${postId}/`, {
      content: commentText,
    });
    setCommentText("");
  };

  useEffect(() => {
    if (dataPost !== null) {
      setComments((currentComments) => [...currentComments, dataPost]);
    }
  }, [dataPost]);

  const deleteComment = (commentId) => {
    sendRequestDelete("delete", `social/comments/comment/${commentId}/`);
    setComments((currentComments) =>
      currentComments.filter((comment) => comment.id !== commentId)
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
        <PostButton onClick={handlePostButtonClick}>Send</PostButton>
      </InputContainer>
      {comments.map((comment) => (
        <CommentBlock key={comment.id}>
          <UserName>{`${comment.user.first_name} ${comment.user.last_name}`}</UserName>
          <CommentContent>{comment.content}</CommentContent>
          <ReactTimeAgo date={Date.parse(comment.created)} locale="en-US" />
          <PostButton onClick={() => deleteComment(comment.id)}>
            Delete
          </PostButton>
        </CommentBlock>
      ))}
    </CommentsContainer>
  );
};

export default CommentsSection;
