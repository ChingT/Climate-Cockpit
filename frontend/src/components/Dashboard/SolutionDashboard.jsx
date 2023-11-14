import useApiRequest from "../../hooks/useApiRequest.js";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import DashboardGrid from "./DashboardGrid.jsx";
import TotalPoints from "./TotalPoints.jsx";

export default function SolutionDashboard() {
  const { loading } = useApiRequest();

  if (loading) return <LoadingSpinner />;
  return (
    <>
      <TotalPoints />
      <DashboardGrid />
    </>
  );
}
