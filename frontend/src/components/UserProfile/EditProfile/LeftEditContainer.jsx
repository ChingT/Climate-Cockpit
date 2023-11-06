import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import avatarImage from "../../../assets/svgs/avatar.svg";
import useApiRequest from "../../../hooks/useApiRequest.js";
import { loginUser } from "../../../store/slices/loggedInUser.js";
import { SecondaryButton } from "../../../styles/globalStyles.js";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner.jsx";
import {
  AvatarImg,
  EditAvatarContainer,
} from "../Profile/ProfileHeader.style.js";
import { CustomFileInputButton } from "./EditProfile.style.js";

const LeftEditContainer = ({ initialAvatar, handleProfileUpdate }) => {
  const { sendRequest, error, data, loading } = useApiRequest();

  const currentAvatar = data?.avatar || initialAvatar;

  const [imagePreview, setImagePreview] = useState(undefined);
  const [imageToUpload, setImageToUpload] = useState(undefined);
  const dispatch = useDispatch();

  const handleProfileImageUpdate = () => {
    let formdata = new FormData();
    formdata.append("avatar", imageToUpload);
    sendRequest("patch", "users/me/", formdata, true);
  };

  const UploadPreviewImage = (e) => {
    let reader = new FileReader();
    reader.onload = () => {
      reader.readyState == 2 && setImagePreview(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
    setImageToUpload(e.target.files[0]);
  };

  useEffect(() => {
    if (data !== null) {
      localStorage.setItem("user", JSON.stringify(data));
      dispatch(loginUser({ user: data }));
      setImageToUpload(undefined);
      setImagePreview(undefined);
    }
  }, [data]);

  return (
    <EditAvatarContainer>
      <div>
        <AvatarImg
          alt="avatar"
          src={imagePreview || currentAvatar || avatarImage}
        />
        {imagePreview ? (
          <>
            <button onClick={handleProfileImageUpdate}>upload image</button>
            <button onClick={() => setImagePreview(undefined)}>cancel</button>
          </>
        ) : (
          <CustomFileInputButton>
            <SecondaryButton>Choose Image</SecondaryButton>
            <input
              type="file"
              id="pictures"
              accept="image/*"
              onChange={UploadPreviewImage}
            />
          </CustomFileInputButton>
        )}
      </div>
      <div className={"button-wrapper"}>
        <p>{error}</p>
        {loading && <LoadingSpinner />}
        <button>delete account</button>
        <button onClick={handleProfileUpdate}>save changes</button>
      </div>
    </EditAvatarContainer>
  );
};

export default LeftEditContainer;
