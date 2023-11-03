// Import the styled component
import { SolutionButtonStyle } from "./solution.style.js";
import { Link } from "react-router-dom";
import { ButtonsStyle } from "../../styles/buttons.style.js";
import React from "react";

function SolutionButton({ svg_icon }) {
  return (
    <>
      <Link to="/signup">
        <SolutionButtonStyle>Yes, I drive an electric car</SolutionButtonStyle>
      </Link>{" "}
    </>
  );
}

export default SolutionButton;
