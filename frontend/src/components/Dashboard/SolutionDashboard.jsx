import TotalPoints from "./TotalPoints.jsx";
import DashboardGrid from "./DashboardGrid.jsx";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import useApiRequest from "../../hooks/useApiRequest.js";

export default function SolutionDashboard() {
  const { loading } = useApiRequest();

  return (
    <>
      {loading && <LoadingSpinner />}
      <TotalPoints />
      <DashboardGrid />
    </>
  );
}
