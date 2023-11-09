import { useState } from "react";
import {
  CreatePostModalContainer,
  CustomImageUploadButton,
  SubmitButton,
  TextField,
} from "./CreatePost.style.js";
import sendIcon from "../../../assets/svgs/send_button.svg";
import uploadIcon from "../../../assets/svgs/Shape.svg";
import Overlay from "../../Overlay/Overlay.jsx";
import useApiRequest from "../../../hooks/useApiRequest.js";
import SharedPost from "../Post/SharedPost.jsx";

const CreatePostModal = ({ setModalIsOpen, userData, postToShare }) => {
  const [content, setContent] = useState();
  const [imageToUpload, setImageToUpload] = useState([]);
  const [error, setError] = useState(undefined);
  const { sendRequest } = useApiRequest();

  const uploadPreviewImage = (e) => {
    setImageToUpload([]);
    setError(undefined);
    const imagesFromUpload = Array.from(e.target.files);

    if (imagesFromUpload.length > 4) {
      setError({ images: "you can only upload 4 images per post" });
    } else {
      imagesFromUpload.map((image, index) => {
        const imageBlob = URL.createObjectURL(image);
        setImageToUpload((prevState) => [
          ...prevState,
          { blob: imageBlob, index, file: image },
        ]);
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("content", content);
    //if it is a share of a post, then link it to the post to share
    if (postToShare) {
      formdata.append("shared", postToShare.id);
    }
    imageToUpload.map((image) => {
      formdata.append("images", image.file);
    });
    sendRequest("post", "social/posts/", formdata, true);
    setModalIsOpen(false);
  };

  const removeImage = (clickedIndex) => {
    setImageToUpload(
      imageToUpload.filter((image) => image.index !== clickedIndex),
    );
  };

  return (
    <Overlay onClose={setModalIsOpen}>
      <CreatePostModalContainer>
        <div className={"body-container"}>
          <img className={"user-avatar"} src={userData.avatar} />
          <TextField
            className={"content-input"}
            id="content"
            cols="40"
            rows="2"
            name="content"
            value={content}
            placeholder={`What's on your mind ${
              userData.first_name && `, ${userData.first_name}`
            }?`}
            onChange={(e) => setContent(e.target.value)}
          />
          {postToShare && <SharedPost postData={postToShare} />}
          <div className={"image-preview-container"}>
            {imageToUpload &&
              imageToUpload.map((image) => {
                return (
                  <div key={image.index} className={"image-preview-instance"}>
                    <button onClick={() => removeImage(image.index)}>X</button>
                    <img
                      className={"user-avatar"}
                      src={image.blob}
                      width={400}
                    />
                    <span>{image.file.name}</span>
                  </div>
                );
              })}
            {error?.images && <p>{error.images}</p>}
          </div>
        </div>
        <div className={"footer-container"}>
          <CustomImageUploadButton>
            <img src={uploadIcon} />
            <input
              type="file"
              multiple
              className={"image-upload-button"}
              accept="image/*"
              onChange={uploadPreviewImage}
            />
          </CustomImageUploadButton>
          <SubmitButton className={"send-post-button"} onClick={handleSubmit}>
            <img src={sendIcon} />
          </SubmitButton>
        </div>
      </CreatePostModalContainer>
    </Overlay>
  );
};

export default CreatePostModal;
