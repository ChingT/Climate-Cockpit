import { ImpactIconDiv } from "./solution.style.js";

function ImpactIcon({ impact, visibleOrChecked }) {
  return (
    <ImpactIconDiv $visibleOrChecked={visibleOrChecked}>
      <div>{impact}</div>
    </ImpactIconDiv>
  );
}

export default ImpactIcon;
