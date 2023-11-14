import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import avatarImage from "../../../assets/svgs/avatar.svg";
import useApiRequest from "../../../hooks/useApiRequest.js";
import { loginUser } from "../../../store/slices/loggedInUser.js";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner.jsx";
import {
  EditAvatarContainer,
  EditAvatarImg,
  ProfileButton,
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
  }, [data, dispatch]);

  if (loading) return <LoadingSpinner />;
  return (
    <EditAvatarContainer>
      <div>
        <EditAvatarImg
          alt="avatar"
          src={imagePreview || currentAvatar || avatarImage}
        />
        {imagePreview ? (
          <>
            <ProfileButton
              style={{ color: "black" }}
              onClick={handleProfileImageUpdate}
            >
              Upload image
            </ProfileButton>
            <ProfileButton
              style={{ color: "black" }}
              onClick={() => setImagePreview(undefined)}
            >
              Cancel
            </ProfileButton>
          </>
        ) : (
          <CustomFileInputButton>
            <ProfileButton style={{ color: "black" }}>
              Choose Image
            </ProfileButton>
            <input
              type="file"
              id="pictures"
              accept="image/*"
              onChange={UploadPreviewImage}
            />
          </CustomFileInputButton>
        )}
      </div>
      <p>{error}</p>
      <ProfileButton style={{ color: "black" }}>Delete account</ProfileButton>
      <ProfileButton style={{ color: "black" }} onClick={handleProfileUpdate}>
        Save changes
      </ProfileButton>
    </EditAvatarContainer>
  );
};

export default LeftEditContainer;
