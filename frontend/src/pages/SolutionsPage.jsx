import SolutionDashboard from "../components/Dashboard/SolutionDashboard.jsx";
import SolutionList from "../components/Solution/SolutionList.jsx";
import {
  LeftBar,
  Main,
  RightBar,
} from "../components/Dashboard/dashboard.style.js";
import SolutionFilter from "../components/SolutionFilter/SolutionFilter.jsx";

const SolutionsPage = () => {
  return (
    <Main>
      <LeftBar>
        <SolutionDashboard />
      </LeftBar>
      <RightBar>
        <div className="filterDiv">
          <SolutionFilter />
        </div>
        <SolutionList />
      </RightBar>
    </Main>
  );
};

export default SolutionsPage;
