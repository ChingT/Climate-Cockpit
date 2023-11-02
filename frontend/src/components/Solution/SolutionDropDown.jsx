import ImpactIcon from "./ImpactIcon.jsx";
import ProgressComponent from "./ProgressBar.jsx";
import Resources from "./Resources.jsx";
import CategoryLabel from "./CategoryLabel.jsx";

export default function SolutionDropDown() {
  return (
    <>
      <ImpactIcon />
      <CategoryLabel category="industry" />
      <>Description</>
      <ProgressComponent percentage={31} />
      <Resources />

      <>Level Buttons</>
    </>
  );
}
