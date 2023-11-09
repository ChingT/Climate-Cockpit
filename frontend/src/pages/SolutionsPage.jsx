import SolutionDashboard from "../components/Dashboard/SolutionDashboard.jsx";
import {
  LeftBar,
  Main,
  RightBar,
} from "../components/Dashboard/dashboard.style.js";
import SolutionList from "../components/Solution/SolutionList.jsx";

const SolutionsPage = () => {
  return (
    <Main>
      <LeftBar>
        <SolutionDashboard />
      </LeftBar>
      <RightBar>
        <SolutionList />
      </RightBar>
    </Main>
  );
};

export default SolutionsPage;
