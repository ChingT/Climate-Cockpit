import React, { useEffect, useState } from "react";
import {
  CommentBlock,
  CommentContent,
  CommentInput,
  CommentsContainer,
  InputContainer,
  PostButton,
  UserName,
} from "./Comment.style.js";
import useApiRequest from "../../hooks/useApiRequest.js";
import ReactTimeAgo from "react-time-ago";

const CommentsSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const { sendRequest, data, error } = useApiRequest();

  useEffect(() => {
    sendRequest("get", `social/comments/${postId}/?limit=3`);
  }, []);

  useEffect(() => {
    if (data && !error) {
      if (data.results) {
        setComments(data.results);
      }
      if (data.content) {
        setComments((prevComments) => [data, ...prevComments]);
      }
    }
  }, [data, error]);

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const deleteComment = (commentId) => {
    sendRequest("delete", `social/comments/comment/${commentId}/`);

    setComments((currentComments) =>
      currentComments.filter((comment) => comment.id !== commentId),
    );
  };

  useEffect(() => {
    if (error) {
      console.error("Error deleting the comment:", error);
    }
  }, [error]);

  useEffect(() => {
    if (data && !error) {
      if (data.commentDeleted) {
        setComments((prevComments) =>
          prevComments.filter(
            (comment) => comment.id !== data.commentDeletedId,
          ),
        );
      }
    }
  }, [data, error]);
  const postComment = () => {
    if (!commentText.trim()) return;

    sendRequest("post", `social/comments/${postId}/`, {
      content: commentText,
    });

    setCommentText("");
  };

  const handlePostButtonClick = () => {
    postComment(commentText);
  };

  console.log(data);

  return (
    <CommentsContainer>
      <InputContainer>
        <CommentInput
          value={commentText}
          onChange={handleCommentChange}
          placeholder="Write a comment =)"
        />
        <PostButton onClick={handlePostButtonClick}>POST</PostButton>
      </InputContainer>
      {comments.map((comment) => (
        <CommentBlock key={comment.id}>
          <UserName>{`${comment.user.first_name} ${comment.user.last_name}`}</UserName>{" "}
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
