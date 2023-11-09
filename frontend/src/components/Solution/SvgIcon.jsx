// Import the styled component
import { SvgIconDiv } from "./solution.style.js";

function SvgIcon({ svg_icon }) {
  return (
    <SvgIconDiv>
      <img src={svg_icon} alt="Impact Logo" />
    </SvgIconDiv>
  );
}

export default SvgIcon;
