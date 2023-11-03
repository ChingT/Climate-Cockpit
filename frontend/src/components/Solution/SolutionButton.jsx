// Import the styled component
import { SolutionButtonStyle } from "./solution.style.js";
import { Link } from "react-router-dom";
import React from "react";
import theme from "../../styles/theme.js";

function SolutionButton({ button_text, selected }) {
  // You can now use `selected` within your component to conditionally apply styles or logic

  // For example, you might want to apply a different style if selected is true
  const buttonStyle = selected
    ? {
        backgroundColor: theme.colors.selectedSolution,
      }
    : {
        backgroundColor: theme.colors.unselectedSolution,
      };

  return (
    <>
      <Link to="/signup">
        {/* Apply the buttonStyle based on the `selected` prop */}
        <SolutionButtonStyle style={buttonStyle}>
          {button_text}
        </SolutionButtonStyle>
      </Link>
    </>
  );
}

export default SolutionButton;
