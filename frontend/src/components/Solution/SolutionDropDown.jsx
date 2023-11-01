import ImpactIcon from "./ImpactIcon.jsx";
import ProgressComponent from "./ProgressBar.jsx";
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

function Resources() {
  return (
    <>
      <>Tabs(videos, news, books)</>
      <>Embedded videos / links</>
    </>
  );
}
