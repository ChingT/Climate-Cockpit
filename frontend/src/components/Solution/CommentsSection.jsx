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
  console.log(comments);
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
      {comments.map((comment) => (
        <CommentBlock key={comment.id}>
          <UserName>{comment.user}</UserName>
          <CommentContent>{comment.content}</CommentContent>
          <Timestamp>{comment.created}</Timestamp>
        </CommentBlock>
      ))}
    </CommentsContainer>
  );
};

export default CommentsSection;
