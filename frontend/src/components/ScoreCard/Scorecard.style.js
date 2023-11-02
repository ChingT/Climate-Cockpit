import styled from "styled-components";
import blue_texture from "../../assets/images/blue_texture.png";
import green_texture from "../../assets/images/green_texture.png";
import orange_texture from "../../assets/images/orange_texture.png";

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
  margin-left: 15%;
  width: 80%;
`;

export const CategoryPart = styled.div`
  flex: 1;
  background-size: cover;
  background-position: center;
  border: 2px solid ${(props) => props.theme.ProgressBar.borderColor};
  background-image: ${(props) => {
    const textures = [null, blue_texture, orange_texture, green_texture];
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
  gap: 4%;
`;

export const ScoreIcon = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: ${(props) => props.theme.backgroundColors.impactIconSelected};
  margin-bottom: 1.1%;
`;
