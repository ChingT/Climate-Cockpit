import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const CommentInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  margin-right: 10px;
`;

export const PostButton = styled.button`
  background-color: #ff7f00;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e67300;
  }
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 100%;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const Comment = styled.div`
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const UserName = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CommentContent = styled.div`
  margin-bottom: 5px;
`;

export const Timestamp = styled.div`
  font-size: 0.8em;
  color: #a1a1a1;
`;
