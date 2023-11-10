import styled from "styled-components";

export const CreatePostModalContainer = styled.div`
  width: 100%;
  min-height: 6rem;
  max-width: 42rem;
  background: #ffffff;
  box-shadow:
    0px 0px 1px rgba(0, 0, 0, 0.2),
    0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;

  .body-container {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2rem;
    padding: 3.5rem;

    .user-avatar {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      object-fit: cover;
    }
    `;

export const StyledInput = styled.input`
  position: relative;
  width: 100%;
  height: fit-content;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const StyledImagePreview = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  grid-column: 2/-1;
`;

export const CloseButton = styled.button`
  background: #ccc;
  border: none;
  padding: 8px;
  margin-right: 8px;
  border-radius: 4px;
  cursor: pointer;
`;

export const SaveButton = styled.button`
  background: #4caf50;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
`;
