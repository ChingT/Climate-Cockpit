import styled, { css } from "styled-components";
import { defaultButtonStyles } from "../../styles/globalStyles.js";

export const FollowOrRequestButton = styled.button`
  ${defaultButtonStyles};
  font-size: 0.625rem;

  ${(props) =>
    props.follow &&
    css`
      background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
      border-color: transparent;
      color: white;
    `}
`;

export const TickerImage = styled.img`
  height: 100%;
  width: 1.4em;
  opacity: 0.4;
  margin-right: 0.5em;
`;
