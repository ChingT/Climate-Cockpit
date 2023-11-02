import styled from "styled-components";
import theme from "../../styles/theme.js";

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
  background-color: ${({ isFilled }) =>
    isFilled ? theme.ProgressBar.backgroundColor : "transparent"};
  border: 2px solid ${theme.ProgressBar.borderColor};
`;

export const TitleAndBar = styled.div`
  display: flex;
  width: 100%;
  height: inherit;
  flex-direction: row;
  align-items: center;
  gap: 4%;
`;
