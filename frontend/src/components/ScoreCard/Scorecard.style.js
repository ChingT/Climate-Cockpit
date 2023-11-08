import styled from "styled-components";
import blue_texture from "../../assets/images/blue_texture.png";
import green_texture from "../../assets/images/green_texture.png";
import orange_texture from "../../assets/images/orange_texture.png";

export const ScorecardContainer = styled.div`
  width: 44rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 24px 20px;
  border-radius: 6px;
  position: absolute; 
  top: 12rem;
  z-index: 100;
`;

export const ScoreCardContent = styled.div`
  width: 94%;
  height: 92%;
`;

export const CategoryBar = styled.div`
  display: flex;
  width: 98%;
  height: 31px;
  margin-bottom: 0.2rem;
`;

export const LevelNames = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 98%;
  padding-bottom: 15px;
  span {
    word-wrap: break-word;
  }
`;

export const BarAndLevel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: inherit;
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
  align-items: start;
  gap: 2rem;
`;

export const CategoryWrap = styled.div`
  display: flex;
  margin-top: 1.5%;
`;

export const ScoreIcon = styled.div`
  width: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  display: flex;
  margin-top: 0.75%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.backgroundColors.impactIconSelected};
`;

export const FinalContainer = styled.div`
  width: inherit;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
`;
