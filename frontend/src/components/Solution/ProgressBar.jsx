// ProgressComponent.jsx
import { ProgressBar, ProgressContainer } from "./ProgressBar.style.js";

function ProgressComponent({ percentage, progress_description }) {
  return (
    <ProgressContainer>
      <ProgressBar $percentage={percentage} />
      <p>
        {percentage}% {progress_description}
      </p>
    </ProgressContainer>
  );
}

export default ProgressComponent;
