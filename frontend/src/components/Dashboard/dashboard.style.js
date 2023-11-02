import styled from "styled-components";

export const DashboardGridDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid red;
  & > div {
    display: flex;
    flex-direction: row;
    border: 2px solid blue;
  }
`;

export const DashboardIcons = styled.div`
  width: 100px;
  height: 100px;
`;

export const DashboardCategoriesTotalPoints = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  height: 10vh;
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
