import styled from "styled-components";
import theme from "../../styles/theme.js";

export const Main = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 5rem;
  overflow-y: scroll;
  display: flex;
  gap: 2rem;
  flex-direction: row;
`;
export const DashboardGridDiv = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin-left: 3rem;
  box-sizing: border-box;
  border: 2px solid ${(props) => props.theme.emissionColors.inland};
  position: relative;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between; /* Align children with space between */
  }

  & > div > div {
    display: flex;
    flex-direction: row;
    align-items: center; /* Center align items within the inner div */
  }

  /* Add styles for left column here */

  .left-column {
    justify-content: flex-start;
    /* Align content in the left column to the left */
  }

  /* Add styles for right column here */

  .right-column {
    justify-content: flex-end; /* Align content in the right column to the right */
  }
`;

export const StyledH2 = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-left: 3rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const DashboardCategoriesTotalPoints = styled.div`
  padding-top: 5rem;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  height: 10vh;
  border-bottom: 1.2px solid ${theme.colors.solutionPagePrimaryColor};
  font-size: ${(props) => props.theme.fontSize.equation};
  color: ${(props) => props.theme.fontColors.primary};
  font-weight: bold;

  /* Add red border to all child div elements */

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 80%;
  }

  .inland-emissions {
    color: ${(props) => props.theme.fontColors.emissionColor};
  }

  .imported-emissions {
    color: ${(props) => props.theme.fontColors.emissionColor};
  }

  .removed-emissions {
    color: ${(props) => props.theme.fontColors.removalColor};
  }

  .solution-emissions {
    color: ${(props) => props.theme.fontColors.solutionColor};
  }
`;

export const Import = styled.div`
  box-sizing: border-box;
  border: 2px solid ${(props) => props.theme.emissionColors.imported};
  position: relative;
  width: 90%;
  margin-left: 3rem;
`;

export const Removal = styled.div`
  box-sizing: border-box;
  border: 2px solid ${(props) => props.theme.emissionColors.removed};
  position: relative;
  width: 90%;
  margin-left: 3rem;
`;
export const CircleShapedPoints = styled.div`
  width: 45px;
  height: 45px;
  position: absolute;
  top: -1.2rem;
  right: -1.2rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.emissionColors[props.$type]};
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.fontColors.emissionLevel};
`;

export const LeftBar = styled.div`
  width: 50.6%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-right: 1.2px solid ${theme.colors.solutionPagePrimaryColor};
`;
export const RightBar = styled.div`
  width: 46%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
