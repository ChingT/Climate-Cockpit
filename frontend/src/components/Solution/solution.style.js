import styled from "styled-components";

export const SolutionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .solutionBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 3px solid black;
    background-color: ${(props) =>
      props.visibleOrChecked
        ? props.theme.backgroundColors.selectedSolutionBar
        : "transparent"};
    border-radius: 10px;
    padding: 5px;
  }

  .solutionBarLeft {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }

  .solutionName {
    font-size: ${(props) => props.theme.fontSize.solutionName};
    margin: 10px;
    font-weight: bold;
  }

  .solutionBarRight {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-right: 5px;
  }

  .solutionBarRightInner {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .supporters {
    img {
      width: 20px;
      height: auto;
    }
  }

  .solutionDetails {
    border: 3px solid black;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 20px;
  }

  .solutionButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const CheckMark = styled.div``;

export const MegatonIcon = styled.div``;

export const Title = styled.div``;

export const NumberOfSupporters = styled.div``;

export const CategoryLabelDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: ${(props) => props.theme.categoryLabels.fontSize};
  background-color: ${(props) =>
    props.theme.categoryLabels[props.$category] ||
    props.theme.categoryLabels.default};
  color: ${(props) => props.theme.categoryLabels.fontColor};
  width: 80px;
`;

export const ImpactIconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.visibleOrChecked
      ? props.theme.backgroundColors.impactIconSelected
      : props.theme.backgroundColors.impactIconUnselected};
  color: ${(props) => props.theme.fontColors.impactIcon};
  border-radius: 10px;
  width: 6vh;
  height: 6vh;
  font-size: 3vh;

  img {
    filter: brightness(0) invert(1);
  }
`;
export const SolutionButtonStyle = styled.div`
  color: ${(props) => props.theme.fontColors.button};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25);
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  font-size: 19px;
  width: auto;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50px;
  font-weight: bold;
`;

export const SvgIconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.theme.backgroundColors.impactIconUnselected};
  border-radius: 10px;
  width: 6vh;
  height: 6vh;

  img {
    filter: brightness(0) invert(1);
    width: 80%;
    height: auto;
  }
`;

export const LevelButton = styled.div``;
