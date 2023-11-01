import { ImpactIconDiv } from "./solution.style.js";

function ImpactIcon({ impact }) {
  return (
    <ImpactIconDiv>
      <div>{impact}</div>
    </ImpactIconDiv>
  );
}

export default ImpactIcon;
