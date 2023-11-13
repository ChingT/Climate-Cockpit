import styled from "styled-components";
import gray_texture from "../../../assets/category_textures/gray_pencil_texture.png";
import red_texture from "../../../assets/category_textures/light_red_texture.png";
import paper_texture from "../../../assets/images/paper_texture.jpg";

export const CreatePostModalContainer = styled.div`
  background-image: url(${paper_texture});
  min-height: 15rem;
  min-width: 39rem;
  max-width: 42rem;
  box-shadow:
    0px 0px 1px rgba(0, 0, 0, 0.2),
    0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;

  .body-container {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    padding: 3rem;
  }

  .user-avatar {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const LeftPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  gap: 1.7rem;
`;

export const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  width: 20%;
  height: 20rem;
`;

export const BrowseAndRemove = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  width: 6rem;
  border: 1.5px solid lightgray;
  margin-right: 1%;
  margin-left: 1%;
  padding: 8px 16px 8px 16px;
  margin-bottom: 1%;
  font-size: 16.5px;
  font-family: "CabinSketch", serif;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${gray_texture});
  color: black;
  height: 2.4rem;
  border-radius: 10px;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  display: none;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 13rem;
  background: conic-gradient(
    from 90deg at 1.1px 1.1px,
    #f3f3e4 25%,
    rgb(217, 217, 217) 0
  );
  background-size: 24px 24px;
  padding: 8px;
  margin-bottom: 10px;
  font-size: 16px;
  font-family: "CabinSketch", serif;
  font-weight: 500;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    outline: 1.5px solid
      ${(props) => props.theme.fontColors.profilePageSecondaryColor};
  }
`;

export const StyledImg = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const buttonStyles = `
  width: 6rem;
  border-radius: 10px;
  margin-right: 1%;
  margin-left: 1%;
  box-shadow: rgba(0, 0, 0, 0.25);
  padding: 8px 16px 8px 16px;
  margin-bottom: 1%;
  cursor: pointer;
  font-size: 15px;
  font-family: "CabinSketch", serif;
  font-weight: 600;
`;

export const SaveButton = styled.button`
  ${buttonStyles}
  background-image: url(${red_texture});
  background-size: cover;
  color: ${(props) => props.theme.fontColors.primary};
`;

export const RemoveButton = styled.button`
  ${buttonStyles}
  background-image: url(${red_texture});
  display: flex;
  height: 2.45rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  color: ${(props) => props.theme.fontColors.primary};
`;

export const StyledImagePreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
`;
