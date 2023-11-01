import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  height: ${(props) => props.theme.header_height};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow:
    0px 0px 1px rgba(0, 0, 0, 0.2),
    0px 10px 20px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  z-index: 10;
  padding: 0 2rem;
`;

export const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 7rem;
  height: 100%;

  nav {
    display: flex;
    height: 100%;
    gap: 2rem;
  }
`;

export const StyledP = styled.p`
  font-size: 18px;
`;

export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-bottom: 2px solid;
  border-color: transparent;

  &.active {
    border-color: rgba(0, 119, 191, 1);
    color: rgba(0, 119, 191, 1);
  }

  &:hover:not(.active) {
    border-color: #ccc;
  }
`;

export const PostsTextImage = styled.img`
  width: 65px;
  height: 21px;
  margin-right: 2rem;
`;

export const TextImage = styled.img`
  width: 150px;
  height: 20px;
`;

export const StyledImage = styled.img`
  width: 36px;
  height: 36px;
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const LogoWrapper = styled(Link)`
  img {
    height: 55.4px;
    width: 293.79px;
  }
`;

export const SolutionWrapper = styled(Link)`
  img {
    height: 20px;
    width: 129px;
  }
`;

export const ProfileWrapper = styled(Link)`
  img {
    height: 20px;
    width: 91px;
  }
`;

export const SocialWrapper = styled(Link)`
  img {
    height: 20px;
    width: 79px;
    margin-right: 3.7rem;
  }
`;

export const MenuContainer = styled.div`
  position: relative;

  > img {
    padding: 0.4rem;
    cursor: pointer;
  }
`;

export const NotificationButton = styled.button`
  background: none;
  border: none;
  height: 100%;
  position: relative;

  .icon-wrapper {
    cursor: pointer;

    > img {
      height: 2.45rem;
      width: 3.6rem;
      padding-right: 0.7rem;
    }

    .request-count {
      font-size: 10px;
      font-weight: bold;
      position: absolute;
      top: -0.6rem;
      right: 0;

      background: rgba(0, 0, 0, 1);
      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1.2rem;
      width: 1.2rem;
      color: white;
    }
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export const ActionsWrapper = styled.ul`
  position: absolute;
  top: calc(100% + 1rem);
  right: 0;
  width: 11rem;
  background-color: white;
  border-radius: 0.2rem;
  overflow: hidden;
`;

export const ActionContainer = styled.li`
  list-style: none;
  cursor: pointer;
  font-size: 0.875rem;

  &:first-child {
    border-bottom: 1px solid #d8d3d3;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  > a,
  > div {
    width: 100%;
    padding: 0.8rem 1.2rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      opacity: 0.35;
    }

    &.active {
      background: rgba(0, 0, 0, 0.2);
    }
  }
`;

export const NotificationsContainer = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 1rem);
  background: white;
  padding: 1.8rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 0.5rem;
`;

export const RequestTypeContainer = styled.div`
  > p {
    font-size: 1.2rem;
    text-align: left;
    margin-bottom: 2rem;
  }

  .requests-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const RequestContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 22rem;

  a {
    display: flex;
    gap: 1rem;

    &:hover {
      text-decoration: underline;

      img {
        transform: scale(1.1);
      }
    }
  }

  .user-name-location {
    text-align: left;
    font-size: 0.875rem;
    line-height: 1.4;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .user-location {
      opacity: 0.5;
    }
  }
`;

export const RequestStatusIcon = styled.img`
  height: 2.5rem;
  aspect-ratio: 1/1;

  cursor: ${(props) => (props.noClick ? "default" : "pointer")};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
