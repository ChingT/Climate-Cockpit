import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BackgroundImage from "../../../assets/images/profile_background.png";
import avatarImage from "../../../assets/svgs/avatar.svg";
import { SecondaryButton } from "../../../styles/globalStyles.js";
import FollowAddButtons from "../../FollowAddFriendButtons/FollowAddButtons.jsx";
import ProfileData from "./ProfileData/ProfileData.jsx";
import {
  AvatarImg,
  ProfileBackground,
  ProfileHeaderContainer,
  ProfileHeaderLeftContainer,
  ProfileHeaderRightContainer,
} from "./ProfileHeader.style.js";
import ProfileSubNavigation from "./ProfileSubNavigation/ProfileSubNavigation.jsx";

function ProfileHeader({ userdata, profileId, error }) {
  const currentUser = useSelector((store) => store.loggedInUser.user);
  const friendRequests = useSelector((store) => store.friendRequests);
  const requestObject = friendRequests.find(
    (request) => request.receiver.id === Number(profileId),
  );

  return (
    <>
      <ProfileBackground
        src={BackgroundImage}
        alt="Background"
      ></ProfileBackground>
      <ProfileHeaderContainer>
        {userdata && (
          <>
            <ProfileHeaderLeftContainer>
              <AvatarImg alt="avatar" src={userdata.avatar || avatarImage} />
              <h2>{`${userdata.first_name} ${userdata.last_name}`}</h2>
              <h3>{userdata.location}</h3>
              {userdata.id === currentUser.id ? (
                <Link to={"/profile/edit"}>
                  <SecondaryButton>edit profile</SecondaryButton>
                </Link>
              ) : (
                <FollowAddButtons
                  friendInfo={userdata}
                  requestObject={requestObject}
                />
              )}
            </ProfileHeaderLeftContainer>

            <ProfileHeaderRightContainer>
              <ProfileData userdata={userdata} />
              <ProfileSubNavigation userdata={userdata} profileId={profileId} />
            </ProfileHeaderRightContainer>
          </>
        )}
        {error && (
          <div>
            <h2>Profile not found</h2>
            <Link to={"/find-friends"}>
              <button>find friends here!</button>
            </Link>
          </div>
        )}
      </ProfileHeaderContainer>
    </>
  );
}

export default ProfileHeader;
