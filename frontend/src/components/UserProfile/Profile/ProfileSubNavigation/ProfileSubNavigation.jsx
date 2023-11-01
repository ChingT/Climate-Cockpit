import { useDispatch, useSelector } from "react-redux";
import { setProfileFilter } from "../../../../store/slices/profileFilter.js";
import {
  ProfileSubNavItem,
  SubSectionNavContainer,
} from "./ProfileSubNavigation.style.js";

function ProfileSubNavigation({ userdata, profileId }) {
  const filters = profileId
    ? ["posts"]
    : ["posts", "likes", "friends", "followers", "following"];
  const activeFilter = useSelector((store) => store.profileFilter);
  const dispatch = useDispatch();

  const handleProfileFilter = (filterState) => {
    dispatch(setProfileFilter(filterState));
  };

  return (
    <SubSectionNavContainer>
      {filters.map((filter) => {
        return (
          <ProfileSubNavItem
            $filterActive={filter === activeFilter}
            key={filter}
            onClick={() => handleProfileFilter(filter)}
          >
            <span className="nav-item-counter">
              {userdata[`amount_of_${filter}`] === undefined
                ? userdata[`amount_${filter}`]
                : userdata[`amount_of_${filter}`]}
            </span>
            <span className="nav-item-text">{filter}</span>
          </ProfileSubNavItem>
        );
      })}
    </SubSectionNavContainer>
  );
}

export default ProfileSubNavigation;
