import styled from "styled-components";

export const DashboardGridDiv = styled.div`
  display: flex;
  flex-direction: column;

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
    justify-content: flex-start; /* Align content in the left column to the left */
  }

  /* Add styles for right column here */

  .right-column {
    justify-content: flex-end; /* Align content in the right column to the right */
  }
`;

export const DashboardCategoriesTotalPoints = styled.div`
  padding-top: 5rem;
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
