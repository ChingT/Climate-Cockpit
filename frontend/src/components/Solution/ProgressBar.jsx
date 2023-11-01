import { ProgressBar, ProgressContainer } from "./ProgressBar.style.js";
import React from "react";

function ProgressComponent({ percentage }) {
  return (
    <ProgressContainer>
      <ProgressBar percentage={percentage} />
      <p>{percentage}% of energy consumed in Switzerland is clean.</p>
    </ProgressContainer>
  );
}

export default ProgressComponent;
