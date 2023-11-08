import styled from "styled-components";

export const CategoryLabelDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: ${(props) => props.theme.categoryLabels.fontSize};
  font-weight: 600;
  background-image: ${(props) =>
    props.theme.categoryLabels[props.$category] ||
    props.theme.categoryLabels.default};
  color: ${(props) => props.theme.categoryLabels.fontColor};
  width: 85px;
  height: inherit;
`;

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
  font-size: 3vh;
`;
