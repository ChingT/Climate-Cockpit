// ProgressComponent.jsx
import { ProgressBar, ProgressContainer } from "./ProgressBar.style.js";

function ProgressComponent({ progress_description }) {
  return (
    <ProgressContainer>
      <ProgressBar />
      <p>{progress_description}</p>
    </ProgressContainer>
  );
}

export default ProgressComponent;
