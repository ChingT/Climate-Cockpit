import { ProgressBar, ProgressContainer } from "./ProgressBar.style.js";

function ProgressComponent({ percentage }) {
  return (
    <ProgressContainer>
      <ProgressBar $percentage={percentage} />
      <p>{percentage}% of energy consumed in Switzerland is clean.</p>
    </ProgressContainer>
  );
}

export default ProgressComponent;
