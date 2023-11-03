import styled from "styled-components";

export const SolutionContainer = styled.div`
  display: flex; /* This makes it a flex container */
  flex-direction: column; /* This stacks children vertically */

  & > div:first-child {
    display: flex; /* This will align the children in a row */
    justify-content: space-between; /* Spreads the two inner divs across the full width */
    align-items: center; /* Aligns the items vertically */
    border: 3px solid black; /* Keeping your border for clarity */
    border-radius: 10px;
    padding: 5px;
    width: 100%; /* Ensures that the row takes the full width of its container */


    & > div:first-child {
      display: flex; /* Aligns checkbox, icon, and name in a row */
      align-items: center;
      justify-content: flex-start;
      gap: 10px;

      input {
        margin: 10px;
      /
      }

      .solutionName {
        font-size: 30px; // Change this to the font-size you want
        margin: 10px;
      / font-weight: bold;
      }

    }

    & > div:last-child {
      display: flex; /* Aligns checkbox, icon, and name in a row */
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
      margin-right: 5px;

      & > div:first-child {
        display: flex; /* Aligns checkbox, icon, and name in a row */
        align-items: center;
        flex-direction: column; /* This stacks children vertically */
        justify-content: center;


        /* If you want all items to touch the right edge, remove padding/margin from these elements */
      }

      /* If you want all items to touch the right edge, remove padding/margin from these elements */
    }

  }

  & > div:last-child {
    border: 2px solid red;
    display: flex; /* Aligns checkbox, icon, and name in a row */
    align-items: flex-start;
    flex-direction: column; /* This stacks children vertically */
    justify-content: space-between;
    gap: 10px;
    padding: 20px;


    /* Styles for the second main div (Explanation, ProgressBar, etc.) remain the same */
    /* ... */
  }
  
.solutionButton {
  display: flex;
  justify-content: center; /* Centers the button horizontally */
  align-items: center; /* Centers the button vertically, if the container's height is defined */
  width: 100%; /* Ensures the container takes the full width */
}

  /* Styles for the second main div (Explanation, ProgressBar, etc.) remain the same */
  /* ... */
}

}
.supporters {
  img {
    width: 20px; // Set the width to 80% of its parent
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
  color: ${(props) => props.theme.fontColors.button};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25);
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  font-size: 19px;
  width: auto; // or you can set it to a specific value, for example, width: 150px;
  max-width: 300px; // This will ensure that the button does not exceed 200px in width
  display: flex; // Enables flexbox for this container
  justify-content: center; // Centers content horizontally
  align-items: center; // Centers content vertically
  text-align: center; // Centers text horizontally for inline or inline-block elements
  height: 50px; // You can set a specific height for your button
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
    width: 80%; // Set the width to 80% of its parent
    height: auto; // Maintain the aspect ratio of the image
  }
`;

export const LevelButton = styled.div``;
