import styled from "styled-components";

export const SolutionContainer = styled.div``;

export const CheckMark = styled.div``;

export const MegatonIcon = styled.div``;

export const Title = styled.div``;

export const NumberOfSupporters = styled.div``;

export const CategoryLabel = styled.div``;

export const ImpactIconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.isSelected
      ? props.theme.backgroundColors.impactIconSelected
      : props.theme.backgroundColors.impactIconUnselected};
  color: ${(props) => props.theme.fontColors.impactIcon};
  border-radius: 10px;
  width: 6vh;
  height: 6vh;
  border: 2px solid red;
`;

export const LevelButton = styled.div``;
