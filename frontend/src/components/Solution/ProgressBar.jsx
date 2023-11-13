// ProgressComponent.jsx
import { ProgressBar, ProgressContainer } from "./ProgressBar.style.js";
import blue_texture from "../../assets/images/blue_texture.png";

function ProgressComponent({ percentage, progress_description }) {
  const style = {
    "--background-image": `url(${blue_texture})`,
  };
  return (
    <ProgressContainer>
      <ProgressBar $percentage={percentage} style={style} />
      <br />
      {percentage}% {progress_description}
    </ProgressContainer>
  );
}

export default ProgressComponent;
