import styled from "styled-components";
import blue_texture from "../../assets/images/blue_texture.png";
import green_texture from "../../assets/images/green_texture.png";
import orange_texture from "../../assets/images/orange_texture.png";

export const ScorecardContainer = styled.div`
  width: 50rem;
  background-color: white;
  padding: 24px;
  border-radius: 15px;
  margin-bottom: 5px;
  position: relative;
`;

export const CategoryBar = styled.div`
  display: flex;
  width: 80%;
  height: 35px;
  margin-bottom: 1px;
`;

export const LevelNames = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 15%;
  width: 80%;
  padding-bottom: 15px;
`;

export const CategoryPart = styled.div`
  flex: 1;
  background-size: cover;
  background-position: center;
  border: 2px solid ${(props) => props.theme.ProgressBar.borderColor};
  background-image: ${(props) => {
    const textures = [null, orange_texture, green_texture, blue_texture];
    return props.$isFilled
      ? `url(${textures[props.$level] || "none"})`
      : "none";
  }};
`;

export const TitleAndBar = styled.div`
  display: flex;
  width: 100%;
  height: inherit;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

export const ScoreIcon = styled.div`
  width: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${(props) => props.theme.backgroundColors.impactIconSelected};
`;
