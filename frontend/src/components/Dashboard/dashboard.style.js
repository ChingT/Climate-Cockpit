import styled from "styled-components";

export const DashboardCategoriesTotalPoints = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  height: 10vh;
  font-size: ${(props) => props.theme.fontSize.equation};
  font-weight: bold;

  /* Add red border to all child div elements */
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 80%;
  }
`;
