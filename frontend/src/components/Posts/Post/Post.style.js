import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom'
import {CardWithShadowStyles} from '../../../styles/globalStyles.js'


export const PostContainer = styled(CardWithShadowStyles)`
  display: flex;
  flex-direction: column;
  padding: 1.8rem;
  gap: 1.25rem;
  font-size: 0.875rem;
  height: unset;
  max-width: 58rem;
`

export const SharedPostContainer = styled(PostContainer)`
  padding:0 0 0 1rem;
  box-shadow: none;
  border-radius: 0;
  border-left: 1px solid ${props => props.theme.colors.lightGrayBorder};
  grid-column: 1/-1;
`

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
`

export const PostHeaderWrapper = styled.div`
  display: flex;
`

export const ProfileLinkWrapper = styled(Link)`
  width: 100%;
  display: flex;
  gap: 1rem;
`

export const AuthorInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  .date {
    opacity: 50%;
  }
`

export const EditButton = styled.button`
  background: none;
  border: none;
  padding-left: 1rem;
`

export const PostText = styled.p`
  font-size: 1rem;
  cursor: pointer;
`

export const PostImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 1rem;
  width: 100%;
  cursor: pointer;
`

export const PostImage = styled.img`
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  object-fit: contain;

  &:hover {
    transform: scale(1.02);
  }
`

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PostActionWrapper = styled.div`
  display: flex;
  gap: 2rem;
`

export const PostActionButton = styled.button`
  background: none;
  border: none;
  display: flex;
  gap: 1rem;

  img {
    filter: saturate(0) brightness(1.35);
    width: 1.3rem;
    transition: transform 200ms ease;

    &.liked-post {
      filter: none;
    }
  }

  &:hover img {
    transform: scale(1.2);
  }
`

export const LikeCount = styled.p`
  opacity: 50%;
`

export const PostContentContainer = styled.div``

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

  ${props => !props.hasImages && css`
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
    border-right: 1px solid ${props => props.theme.colors.lightGray};
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
    border-top: 1px solid ${props => props.theme.colors.lightGray};
    padding: 1.5rem;
    width: 100%;
  }
`
