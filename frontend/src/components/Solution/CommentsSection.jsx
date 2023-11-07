import React from "react";
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

const CommentsSection = ({
  comments,
  commentText,
  handleCommentChange,
  postComment,
}) => {
  return (
    <CommentsContainer>
      <InputContainer>
        <CommentInput
          value={commentText}
          onChange={handleCommentChange}
          placeholder="Write a comment =)"
        />
        <PostButton onClick={() => postComment(commentText)}>POST</PostButton>
      </InputContainer>
      {comments.map((comment, index) => (
        <CommentBlock key={index}>
          <UserName>{comment.user}</UserName>
          <CommentContent>{comment.content}</CommentContent>
          <Timestamp>{comment.created}</Timestamp>
        </CommentBlock>
      ))}
    </CommentsContainer>
  );
};

export default CommentsSection;
