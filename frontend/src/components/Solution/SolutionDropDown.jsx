import { CategoryLabel, ImpactIcon } from "./solution.style.js";
import ProgressBar from "./ProgressBar.jsx";

export default function SolutionDropDown() {
  return (
    <>
      <ImpactIcon />
      <CategoryLabel />
      <>Description</>
      <ProgressBar percentage={77} />
      <Resources />
      <>Level Buttons</>
    </>
  );
}

function Resources() {
  return (
    <>
      <>Tabs(videos, news, books)</>
      <>Embedded videos / links</>
    </>
  );
}
