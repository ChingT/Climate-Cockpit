import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/header_icons/logo.png";
import avatarImage from "../../assets/svgs/avatar.svg";
import MenuDot from "../../assets/svgs/menu_dots.svg";
import findFriendLogo from "../../assets/header_icons/find_friends.png";
import lightbulb from "../../assets/header_icons/lightbulb-6624237-5487997.png";
import posts from "../../assets/header_icons/posts.png";
import posts_text from "../../assets/header_icons/posts_text.png";
import find_friends_text from "../../assets/header_icons/find_friends_text.png";
import solutions from "../../assets/header_icons/solutions.png";
import profile from "../../assets/header_icons/profile.png";
import useAutoFetch from "../../hooks/useAutoFetch.js";
import { setRequests } from "../../store/slices/friendRequests.js";
import FriendsRequestsContainer from "./FriendsRequests/FriendsRequestsContainer.jsx";
import { ButtonsStyle } from "../../styles/buttons.style.js";
import {
  Avatar,
  ContainerLeft,
  ContainerRight,
  HeaderContainer,
  LogoWrapper,
  MenuContainer,
  NavbarLink,
  NotificationButton,
  PostsTextImage,
  ProfileWrapper,
  SolutionWrapper,
  StyledImage,
  TextImage,
} from "./Navigation.style.js";
import NavigationActionsContainer from "./NavigationActionsContainer.jsx";

const Navigation = () => {
  const loggedInUser = useSelector((store) => store.loggedInUser.user);
  const dispatch = useDispatch();
  const friendRequests = useSelector((store) => store.friendRequests);

  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const { data } = useAutoFetch("get", "social/friends/requests/");

  const [sentRequests, setSentRequests] = useState([]);
  const [receivedRequests, setReceivedRequests] = useState([]);
  const requestsCount = sentRequests.length + receivedRequests.length;

  useEffect(() => {
    dispatch(setRequests(data?.results));
  }, [data, dispatch]);

  useEffect(() => {
    setSentRequests(
      friendRequests.filter(
        (request) =>
          request.requester.id === loggedInUser.id && request.status === "P",
      ),
    );
    setReceivedRequests(
      friendRequests.filter(
        (request) =>
          request.requester.id !== loggedInUser.id && request.status === "P",
      ),
    );
  }, [friendRequests, loggedInUser]);

  return (
    <HeaderContainer>
      <ContainerLeft>
        <LogoWrapper to="/">
          <img src={logo}></img>
        </LogoWrapper>
        <SolutionWrapper to="/solutions">
          <img src={solutions}></img>
        </SolutionWrapper>
        {loggedInUser ? (
          <>
            <ProfileWrapper to="/profile">
              <img src={profile}></img>
            </ProfileWrapper>
          </>
        ) : (
          <ProfileWrapper to="/signup">
            <img src={profile}></img>
          </ProfileWrapper>
        )}
        <nav>
          {loggedInUser ? (
            <>
              <NavbarLink to="/posts">
                <StyledImage src={posts} alt="Image description" />
                <PostsTextImage src={posts_text} alt="Posts Text" />
              </NavbarLink>
              <NavbarLink to="/find-friends">
                <StyledImage src={findFriendLogo} alt="Find Friends" />
                <TextImage src={find_friends_text} alt="Find Friends Text" />
              </NavbarLink>
            </>
          ) : null}
        </nav>
      </ContainerLeft>

      <nav>
        {loggedInUser ? (
          <>
            <ContainerRight>
              <NotificationButton
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <div className={"icon-wrapper"}>
                  <img src={lightbulb} alt="Lightbulb" />
                  {requestsCount >= 0 && (
                    <p className={"request-count"}>{requestsCount}</p>
                  )}
                </div>
                {showNotifications && (
                  <FriendsRequestsContainer
                    setShowNotifications={setShowNotifications}
                    sentRequests={sentRequests}
                    receivedRequests={receivedRequests}
                  />
                )}
              </NotificationButton>
              <Link to={"/profile"}>
                <Avatar
                  src={loggedInUser?.avatar || avatarImage}
                  alt="Avatar"
                />
              </Link>
              <MenuContainer>
                <img
                  src={MenuDot}
                  alt="Menu"
                  onClick={() => setShowMenu(!showMenu)}
                />
                {showMenu && (
                  <NavigationActionsContainer setShowMenu={setShowMenu} />
                )}
              </MenuContainer>
            </ContainerRight>
          </>
        ) : (
          <div>
            <Link to="/signup">
              <ButtonsStyle>Sign Up</ButtonsStyle>
            </Link>
            <Link to="/signin">
              <ButtonsStyle>Log In</ButtonsStyle>
            </Link>
          </div>
        )}
      </nav>
    </HeaderContainer>
  );
};

export default Navigation;
