import styled, { css } from "styled-components";
import { ButtonsStyle } from "../../styles/buttons.style.js";
import blue_texture from "../../assets/images/blue_texture.png";
import purple_texture from "../../assets/images/violet_texture.jpg";
import light_pink_texture from "../../assets/images/light_pink_texture.png";

export const FollowOrRequestButton = styled.button`
  ${ButtonsStyle};
  width: 100%;
  position: relative;
  background-image: url(${blue_texture});
  background-size: cover;
  border-radius: 10px;
  margin-right: 1%;
  margin-left: 1%;
  box-shadow: rgba(0, 0, 0, 0.25);
  padding: 8px 16px 8px 16px;
  margin-bottom: 1%;
  cursor: pointer;
  font-size: 18px;
  font-family: "CabinSketch", serif;
  font-weight: 600;
  color: black;

  ${(props) =>
    props.$follow &&
    css`
      background-image: url(${purple_texture});
      box-shadow: rgba(0, 0, 0, 0.25);
      color: black;
    `}
  ${(props) =>
    props.$requestStatus &&
    css`
      background-image: url(${light_pink_texture});
      box-shadow: rgba(0, 0, 0, 0.25);
      color: black;
    `}
`;

export const RevokeRequest = styled.p`
  font-size: 17px;
`;

export const TickerAndButton = styled.div`
  width: inherit;
  display: flex;
  padding-left: 0.5px;
  padding-right: 1px;
  flex-direction: row;
  font-size: 16.5px;
`;
export const TickerImage = styled.img`
  height: 50%;
  width: 1.5em;
  opacity: 0.8;
  padding-left: 0.4rem;
`;
