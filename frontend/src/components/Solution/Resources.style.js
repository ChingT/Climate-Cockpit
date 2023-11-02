import styled, { css, keyframes } from "styled-components";

const shake = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  10%, 30%, 50%, 70%, 90% { transform: translate(-3px, 0) rotate(-2deg); }
  20%, 40%, 60%, 80% { transform: translate(3px, 0) rotate(2deg); }
`;

export const Video = styled.div`
  width: 100px;
  height: 60px;
  background-color: ${(props) => props.theme.ResourcesColors.videoBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.1s ease;
  &:hover {
    transform: scale(1.05);
    animation: ${shake} 1.5s;
  }
`;
export const VideoInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const VideoTitle = styled.h3`
  margin: 0;
  padding-top: 5px;
  font-size: 1rem;
`;

export const VideoDescription = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #666;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Tab = styled.div`
  padding: 5px;
  cursor: pointer;
  color: ${(props) => props.theme.ResourcesColors.tabColor};
  border-bottom: ${(props) => (props.isActive ? "2px solid black" : "none")};
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  padding: 10px 0;
`;
export const NewsItem = styled.div`
  max-width: 300px;
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
`;

export const NewsImage = styled.img`
  max-width: 100%;
  height: auto;
`;
export const PlayButton = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.ResourcesColors.playButton};
  clip-path: polygon(100% 50%, 0 0, 0 100%);
  position: absolute;
`;

export const SimpleModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  transition:
    opacity 0.1s,
    visibility 0.1s;
  z-index: 1000;
`;

export const ModalContent = styled.div``;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 150px;
  right: 250px;
  background: none;
  border: none;
  font-size: 2.5rem;
  cursor: pointer;
  color: #ffffff;

  &:after {
    content: "×";
  }

  animation: ${(props) =>
    props.show
      ? css`
          ${rotate} 10s linear infinite
        `
      : "none"};
`;
