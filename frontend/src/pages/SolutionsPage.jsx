import TotalPoints from "../components/Dashboard/TotalPoints.jsx";
import DashboardCategoriesGrid from "../components/Dashboard/DashboardCategoriesGrid.jsx";
import SolutionDropDown from "../components/Solution/SolutionDropDown.jsx";
import SolutionFilter from "../components/SolutionFilter/SolutionFilter.jsx";
import styled from "styled-components";

const Main = styled.div `
    margin-top: 4rem`
const SolutionsPage = () => {
  return (
    <Main>
      <TotalPoints />
      <DashboardCategoriesGrid />
      <SolutionFilter />
      <SolutionDropDown />
    </Main>
  );
};

export default SolutionsPage;
