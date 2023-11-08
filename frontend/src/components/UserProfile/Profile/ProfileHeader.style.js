import styled from "styled-components";
import { CardWithShadowStyles } from "../../../styles/globalStyles.js";
import blue_texture from "../../../assets/images/blue_texture.png";
import { ButtonsStyle } from "../../../styles/buttons.style.js";
import pencil_texture from "../../../assets/images/paper_texture.jpg";

export const ProfilePageMain = styled.div`
  display: flex;
  flex-direction: row;
  height: inherit;
  width: 97%;
  gap: 5rem;
  margin-top: 4rem;
`;

export const LeftBlock = styled.div`
  display: flex;
  margin-left: 2.4%;
  flex-direction: column;
  height: 90%;
  width: 50%;
  align-items: center;
  justify-content: center;
`;

export const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;
  height: 90%;
`;

export const ProfileBackground = styled.img`
  position: absolute;
  top: ${(props) => props.theme.header_height};
  left: 50%;
  width: 100vw;
  height: 17rem;
  transform: translateX(-50%);
  object-fit: cover;
`;

export const ProfileHeaderContainer = styled(CardWithShadowStyles)`
  position: relative;
  height: 22rem;
  max-width: ${(props) => props.theme.max_content_width};
  display: flex;
  z-index: 2;
`;

export const NameAndLocation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProfileHeaderTop = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
`;

export const ProfileHeaderLeftContainer = styled.div`
  width: 42%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0rem;
`;

export const ProfileHeaderRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  height: 100%;
  margin-top: 3rem;
  margin-left: 2.5%;
`;

export const AvatarImg = styled.img`
  width: 89%;
  object-fit: cover;
  opacity: 0.96;
  height: 64%;
  border-radius: 50%;
  border: 4px solid #ffffff;
  -webkit-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
  transform: scale(1.6);
  position: relative;
  left: -15%;
`;

export const StyledInputHeader = styled.input`
  outline: none;
  &:focus {
    outline: 2px solid
      ${(props) => props.theme.fontColors.profilePageSecondaryColor};
  }
`;

export const StyledTextArea = styled.textarea`
  outline: none;
  &:focus {
    outline: 2px solid
      ${(props) => props.theme.fontColors.profilePageSecondaryColor};
  }
`;

export const FriendProfileButtons = styled.div`
  margin-left: 6rem;
`;

export const EditAvatarImg = styled.img`
  width: 66%;
  object-fit: cover;
  opacity: 0.9;
  height: 69%;
  min-height: 185px;
  border-radius: 50%;
  border: 4px solid #ffffff;
  -webkit-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
  transform: scale(1.6);
  position: relative;
  left: -19%;
  margin-top: 10%;
`;

export const ProfileHeaderEditContainer = styled.div`
  position: relative;
  background-image: url(${pencil_texture});
  height: fit-content;
  max-width: ${(props) => props.theme.max_content_width};
  display: flex;
  z-index: 2;
  background-color: white;
`;

export const EditAvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  width: 100%;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input[type="file"],
  button {
    ${ButtonsStyle}
  }

  button {
    width: 12rem;
    max-width: 100%;
    margin-top: 1rem;
  }
`;

export const LabelStyle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.fontColors.profilePageSecondaryColor};
`;

export const ProfileButton = styled.button`
  position: relative;
  margin-left: 6rem;
  background-image: url(${blue_texture});
  background-size: cover;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25);
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-family: "CabinSketch", serif;
  font-weight: 600;
  color: black;
}

  >`;
export const SavedChangesMessage = styled(CardWithShadowStyles)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 18rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;
