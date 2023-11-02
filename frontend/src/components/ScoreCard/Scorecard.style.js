import styled from "styled-components";
import theme from "../../styles/theme.js";
import blue_texture from "../../assets/images/blue_texture.png";
import orange_texture from "../../assets/images/orange_texture.png";
import green_texture from "../../assets/images/green_texture.png";

export const ScorecardContainer = styled.div`
  width: 50rem;
  margin-bottom: 25px;
`;

export const CategoryBar = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  margin-bottom: 10px;
`;

export const LevelNames = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 17.5%;
  width: 84%;
`;

export const CategoryPart = styled.div`
  flex: 1;
  background-size: cover;
  background-position: center;
  border: 2px solid ${theme.ProgressBar.borderColor};
  background-image: ${({ isFilled, level }) => {
    switch (level) {
      case 1:
        return isFilled ? `url(${blue_texture})` : "none";
      case 2:
        return isFilled ? `url(${orange_texture})` : "none";
      case 3:
        return isFilled ? `url(${green_texture})` : "none";
      default:
        return "none";
    }
  }};
`;

export const TitleAndBar = styled.div`
  display: flex;
  width: 100%;
  height: inherit;
  flex-direction: row;
  align-items: center;
  gap: 4%;
`;
