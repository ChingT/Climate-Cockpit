import styled from "styled-components";

export const ButtonsStyle = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.fontColors.button};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25);
  padding: 20px 40px 20px 40px;
`;
