import ImpactIcon from "./ImpactIcon.jsx";
import ScoreCard from "../ScoreCard/ScoreCard.jsx";
import ProgressComponent from "./ProgressBar.jsx";
import Resources from "./Resources.jsx";

export default function SolutionDropDown() {
  return (
    <>
      <ImpactIcon />
      <>Description</>
      <ProgressComponent percentage={31} />
      <Resources />
      <ScoreCard />

      <>Level Buttons</>
    </>
  );
}
