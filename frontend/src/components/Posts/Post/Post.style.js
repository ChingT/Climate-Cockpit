import styled, { css } from "styled-components";
import { CardWithShadowStyles } from "../../../styles/globalStyles.js";
import paper_texture from "../../../assets/images/paper_texture.jpg";

export const PostContainer = styled(CardWithShadowStyles)`
  display: flex;
  background-image: url(${paper_texture});
  flex-direction: column;
  padding: 2rem;
  gap: 1.5rem;
  font-size: 0.875rem;
  height: unset;
  max-width: 58rem;
  position: relative;
`;

export const SharedPostContainer = styled(PostContainer)`
  padding: 1 0 0 1rem;
  border-radius: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: conic-gradient(
    from 90deg at 1.1px 1.1px,
    #f3f3e4 25%,
    rgb(217, 217, 217) 0
  );
  background-size: 24px 24px;
  grid-column: 1/-1;
`;

export const PostHeaderWrapper = styled.div`
  display: flex;
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  padding-left: 1rem;
`;

export const PostText = styled.p`
  font-size: 16px;
  cursor: pointer;
  margin-top: 0.5%;
`;

export const PostImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 1rem;
  width: 100%;
  cursor: pointer;
`;

export const PostImage = styled.img`
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  object-fit: contain;

  &:hover {
    transform: scale(1.02);
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const PostActionWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export const CommentImg = styled.img`
  filter: saturate(0) brightness(1.35);
  width: 1.5rem;
  height: 1.5rem;
  transition: transform 200ms ease;
  cursor: pointer;
`;

export const CommentContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-right: 3%;
`;

export const PostActionButton = styled.button`
  background: none;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  font-family: inherit;

  &:hover {
    transform: scale(1.2);
  }

  img {
    filter: saturate(0) brightness(1.35);
    width: 1.5rem;
    height: 1.5rem;
    transition: transform 200ms ease;

    &.liked-post {
      filter: none;
    }
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  display: flex;
  gap: 0.7rem;
  font-family: inherit;
  flex-direction: row;
  margin-left: 1%;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.2);
  }

  img {
    filter: saturate(0) brightness(1.35);
    width: 1.5rem;
    height: 1.5rem;
    transition: transform 200ms ease;
`;
export const BottomButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 9%;
  width: 70%;
  cursor: pointer;
  justify-content: space-between;
`;

export const LeftButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 25%;
`;

export const RightButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
`;

export const LikeCount = styled.p`
  opacity: 90%;
  font-size: 15px;
  width: 9%;
  color: black;
  display: flex;
  align-items: end;
  font-family: inherit;
`;

export const PostContentContainer = styled.div``;

export const ModalPostContainer = styled(PostContainer)`
  width: 80vw;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  height: 32rem;
  overflow: hidden;
  gap: 0;

  ${PostContentContainer} {
    width: 34%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  ${(props) =>
    !props.$hasImages &&
    css`
      width: 32rem;
      height: 20rem;

      ${PostContentContainer} {
        width: 100%;
      }
    `};

  ${PostImageContainer} {
    display: flex;
    flex-direction: column;

    height: 100%;
    width: 66%;

    overflow: scroll;
    border-right: 1px solid ${(props) => props.theme.colors.lightGray};
  }

  ${PostImage} {
    border-radius: 0;
    max-height: 100%;
    height: 100%;

    &:hover {
      transform: none;
    }
  }

  ${PostHeaderWrapper} {
    padding: 1.5rem;
  }

  ${PostText} {
    flex: 1;
    padding: 0 1.5rem;
  }

  ${FooterContainer} {
    width: 100%;
    flex-direction: column;
  }

  ${LikeCount} {
    width: 100%;
    padding: 1rem 1.5rem;
    text-align: right;
  }

  ${PostActionWrapper} {
    border-top: 1px solid ${(props) => props.theme.colors.lightGray};
    padding: 1.5rem;
    width: 100%;
  }
`;
