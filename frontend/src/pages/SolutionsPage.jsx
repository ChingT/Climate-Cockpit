import styled from "styled-components";
import SolutionDashboard from "../components/Dashboard/SolutionDashboard.jsx";
import SolutionDropDown from "../components/Solution/SolutionDropDown.jsx";
import SolutionFilter from "../components/SolutionFilter/SolutionFilter.jsx";
const Main = styled.div`
  height: 100%;
`;
const SolutionsPage = () => {
  return (
    <Main>
      <SolutionDashboard />
      <SolutionFilter />
      <SolutionDropDown />
    </Main>
  );
};

export default SolutionsPage;
