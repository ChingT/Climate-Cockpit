import { CategoryLabel } from "./solution.style.js";
import ImpactIcon from "./ImpactIcon.jsx";

export default function SolutionDropDown() {
  return (
    <>
      <ImpactIcon />
      <CategoryLabel />
      <>Description</>
      <>Progress Bar</>
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
