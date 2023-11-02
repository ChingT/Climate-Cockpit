import styled from "styled-components";

export const ProgressContainer = styled.div`
  width: 631px;
  height: 35px;
  border: 2px solid ${(props) => props.theme.ProgressBar.borderColor};
  margin-bottom: 25px;
  padding: 2px;
`;

export const ProgressBar = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.ProgressBar.backgroundColor};
  width: ${(props) => props.$percentage}%;
`;