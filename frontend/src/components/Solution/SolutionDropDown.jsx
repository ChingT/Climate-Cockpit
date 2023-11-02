import ImpactIcon from "./ImpactIcon.jsx";
import ProgressComponent from "./ProgressBar.jsx";
import Resources from "./Resources.jsx";
import { CategoryLabel } from "./solution.style.js";

export default function SolutionDropDown() {
  return (
    <>
      <ImpactIcon />
      <CategoryLabel />
      <>Description</>
      <ProgressComponent percentage={31} />
      <Resources />

      <>Level Buttons</>
    </>
  );
}
