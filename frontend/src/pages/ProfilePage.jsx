import { useParams } from "react-router";
import useAutoFetch from "../hooks/useAutoFetch.js";
import ProfileHeader from "../components/UserProfile/Profile/ProfileHeader.jsx";
import ProfileSubSection from "../components/UserProfile/Profile/ProfileSubSection.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProfileFilter } from "../store/slices/profileFilter.js";
import ScoreCard from "../components/ScoreCard/ScoreCard.jsx";
import {
  LeftBlock,
  ProfilePageMain,
  RightBlock,
} from "../components/UserProfile/Profile/ProfileHeader.style.js";

function ProfilePage() {
  const { profileId } = useParams();
  const params = useParams();
  const endpointToFetch = profileId ? `users/${profileId}/` : "users/me/";
  const { data, error } = useAutoFetch("get", endpointToFetch, "", params);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProfileFilter("posts"));
  }, [dispatch]);

  return (
    <>
      {data && (
        <ProfilePageMain>
          <LeftBlock>
            <ProfileHeader userdata={data} profileId={profileId} />
            <ProfileSubSection userID={profileId} />
          </LeftBlock>
          <RightBlock>
            <ScoreCard />
          </RightBlock>
        </ProfilePageMain>
      )}
      {error && <ProfileHeader error />}
    </>
  );
}

export default ProfilePage;
