import { useState } from "react";
import {
  CloseButton,
  SaveButton,
  StyledTextarea,
  StyledImagePreview,
  StyledInput,
  CreatePostModalContainer,
} from "./Modal.styles.js";
import Overlay from "../../Overlay/Overlay.jsx";

const EditPostModal = ({ postData, onClose, handleSaveEdit, avatar }) => {
  const [editedContent, setEditedContent] = useState(postData.content);
  const [editedImages, setEditedImages] = useState([]);
  //
  // useEffect(() => {
  //   setEditedContent(postData.content);
  //   setEditedImages([...postData.images]);
  // }, [postData]);

  const handleImageUpload = (e) => {
    const imagesFromUpload = Array.from(e.target.files);

    if (imagesFromUpload.length + editedImages.length > 4) {
      console.error("You can only upload 4 images per post");
    } else {
      imagesFromUpload.map((image, index) => {
        const imageBlob = URL.createObjectURL(image);
        setEditedImages((prevState) => [
          ...prevState,
          { blob: imageBlob, index, file: image },
        ]);
      });
    }
  };

  const removeImage = (clickedIndex) => {
    setEditedImages((prevImages) =>
      prevImages.filter((image, index) => index !== clickedIndex),
    );
  };

  const handleSave = () => {
    handleSaveEdit(editedContent, editedImages);
    onClose();
  };

  return (
    <Overlay onClose={onClose}>
      <CreatePostModalContainer>
        <div className={"body-container"}>
          <img className={"user-avatar"} src={avatar} />
          <StyledTextarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <StyledInput
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
          />
          {editedImages.map((image, index) => (
            <StyledImagePreview key={index}>
              <button onClick={() => removeImage(index)}>Remove</button>
              <img
                className={"user-avatar"}
                src={image instanceof File ? URL.createObjectURL(image) : image}
                alt={`Image ${index}`}
              />
            </StyledImagePreview>
          ))}
          <SaveButton onClick={handleSave}>Save</SaveButton>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </div>
      </CreatePostModalContainer>
    </Overlay>
  );
};
export default EditPostModal;
