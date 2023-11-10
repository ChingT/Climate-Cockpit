import styled from "styled-components";

export const ModalContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
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