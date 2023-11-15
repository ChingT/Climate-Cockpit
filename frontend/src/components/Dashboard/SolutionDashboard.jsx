import useApiRequest from "../../hooks/useApiRequest.js";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import DashboardGrid from "./DashboardGrid.jsx";
import TotalPoints from "./TotalPoints.jsx";
import { useState } from "react";

export default function SolutionDashboard({ listChanged }) {
  const { loading } = useApiRequest();
  const [emissionEquation, setEmissionEquation] = useState({});

  if (loading) return <LoadingSpinner />;
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
