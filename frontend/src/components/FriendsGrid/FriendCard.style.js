import styled from "styled-components";
import { Link } from "react-router-dom";
import { CardWithShadowStyles } from "../../styles/globalStyles.js";
import BackgroundImage from "../../assets/images/light_pink_texture.png";

export const FindFriendsContainer = styled.div`
  display: flex;
  width: 98%;
  padding: 0;
  margin: 0;
`;
export const FriendsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 36rem);
  grid-auto-rows: 22rem;

  width: 50%;
  grid-row-gap: 2.5rem;
  grid-column-gap: 0;
  padding: 0;
  margin: 0;
  justify-items: center;
  align-items: center;
`;

export const FriendCardContainer = styled(CardWithShadowStyles)`
  aspect-ratio: 1/2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 93%;
  padding: 0;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-image: url(${BackgroundImage});
    background-size: cover;
  }
`;

export const RightBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 63%;
  height: 100%;
`;

export const RightTop = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
  width: 100%;
  gap: 10%;
`;

export const RightBottom = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
  width: 100%;
`;

export const NameLocation = styled.div`
  display: flex;
  gap: 0.2rem;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding-right: 1.3rem;
  align-items: end;
  justify-content: center;
  border-right: 1px solid black;
`;

export const FriendCardHeader = styled(Link)`
  display: flex;
  overflow: hidden;
  height: 100%;
  width: 42%;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;

  &:hover {
    cursor: pointer;
  }
`;

export const FriendAvatar = styled.img`
  width: 19rem;
  height: 24rem;
  object-fit: cover;
  margin-right: 6rem;
  margin-top: -2.5rem;
  border-radius: 50%;
  border-top: none;
  z-index: 1;
`;

export const FriendName = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  text-align: end;
  width: 100%;
`;

export const FriendLocation = styled.p`
  font-size: 1rem;
  text-align: end;
  justify-content: end;
  margin-bottom: 1.2rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  width: 30%;
  gap: 0.4rem;
  height: 40%;
  justify-content: center;
  align-items: center;

  > button {
    flex: 1;
  }
`;

export const Memberships = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  gap: 1rem; 
  z-index: 1;
  align-items: center;
  justify-content: start;
  margin-left: -2rem;
`;

export const FriendAbout = styled.p`
  font-size: 0.875rem;
  line-height: 1.7;
  text-align: end;
  margin-bottom: 1.2rem;
  width: 46%;
  z-index: 1;
  margin-left: 10%;
  margin-top: 5%;
`;

export const ReadMoreButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  text-decoration: underline; 
  font-size: inherit;
  color: inherit;
`;
