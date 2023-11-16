import DashboardGrid from "./DashboardGrid.jsx";
import TotalPoints from "./TotalPoints.jsx";
import { useState } from "react";

export default function SolutionDashboard({ listChanged }) {
  const [emissionEquation, setEmissionEquation] = useState({});

  return (
    <>
      <TotalPoints emissionEquation={emissionEquation} />
      <DashboardGrid
        listChanged={listChanged}
        setEmissionEquation={setEmissionEquation}
      />
    </>
  );
}
