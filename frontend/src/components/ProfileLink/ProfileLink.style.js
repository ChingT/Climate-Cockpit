import { Link } from "react-router-dom";
import styled from "styled-components";

export const AuthorInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  .date {
    opacity: 50%;
  }
`;

export const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;

  &.default {
    filter: saturate(0) brightness(1.3);
  }
`;

export const ProfileLinkWrapper = styled(Link)`
  width: 100%;
  display: flex;
  gap: 1rem;
`;
