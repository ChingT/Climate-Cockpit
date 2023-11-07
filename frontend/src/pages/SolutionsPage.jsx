import SolutionDropDown from "../components/Solution/SolutionDropDown.jsx";
import SolutionFilter from "../components/SolutionFilter/SolutionFilter.jsx";
import SolutionDashboard from "../components/Dashboard/SolutionDashboard.jsx";
import {
  LeftBar,
  Main,
  RightBar,
} from "../components/Dashboard/dashboard.style.js";

const SolutionsPage = () => {
  return (
    <Main>
      <LeftBar>
        <SolutionDashboard />
      </LeftBar>
      <RightBar>
        <SolutionFilter />
        <SolutionDropDown />
      </RightBar>
    </Main>
  );
};

export default SolutionsPage;
