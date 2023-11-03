import styled from "styled-components";

export const SolutionContainer = styled.div`
  border: 2px solid yellow;
  display: flex; /* This makes it a flex container */
  flex-direction: column; /* This stacks children vertically */

  & > div:first-child {
    display: flex; /* This will align the children in a row */
    justify-content: space-between; /* Spreads the two inner divs across the full width */
    align-items: center; /* Aligns the items vertically */
    border: 2px solid blue; /* Keeping your border for clarity */
    width: 100%; /* Ensures that the row takes the full width of its container */

    & > div:first-child {
      display: flex; /* Aligns checkbox, icon, and name in a row */
      align-items: center;
      /* If you want all items to touch the left edge, remove padding/margin from these elements */
    }

    & > div:last-child {
      display: flex; /* Aligns supporters/category and impact in a row */
      align-items: center;
      /* If you want all items to touch the right edge, remove padding/margin from these elements */
    }
  }

  & > div:last-child {
    /* Styles for the second main div (Explanation, ProgressBar, etc.) remain the same */
    /* ... */
  }
  .supporters {
    img {
      width: 8%; // Set the width to 80% of its parent
      height: auto; // Maintain the aspect ratio of the image
    }
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
    props.isSelected
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
  background-color: ${(props) => props.theme.colors.unselectedSolution};
  color: ${(props) => props.theme.fontColors.button};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25);
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  font-size: 19px;
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
    width: 80%; // Set the width to 80% of its parent
    height: auto; // Maintain the aspect ratio of the image
  }
`;

export const LevelButton = styled.div``;
