import { useState } from "react";
import {
  ModalContainer,
  ModalContent,
  CloseButton,
  SaveButton,
} from "./Modal.styles.js";

const EditPostModal = ({ postData, onClose, handleSaveEdit }) => {
  const [editedContent, setEditedContent] = useState(postData.content);

  const handleSave = () => {
    handleSaveEdit(editedContent);
    console.log(editedContent)
    onClose();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />
        <SaveButton onClick={handleSave}>Save</SaveButton>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default EditPostModal;
