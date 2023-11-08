import React, { useEffect, useState } from "react";
import {
  Comment as CommentBlock,
  CommentContent,
  CommentInput,
  CommentsContainer,
  InputContainer,
  PostButton,
  Timestamp,
  UserName,
} from "./Comment.style.js";
import useApiRequest from "../../hooks/useApiRequest.js";

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
      if (data.newComment) {
        setComments((prevComments) => [...prevComments, data.newComment]);
      }
    }
  }, [data, error]);

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

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

  console.log(comments);

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
          <Timestamp>
            {new Date(comment.created).toLocaleString()}
          </Timestamp>{" "}
        </CommentBlock>
      ))}
    </CommentsContainer>
  );
};

export default CommentsSection;
