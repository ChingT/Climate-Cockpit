import SolutionDropDown from "../components/Solution/SolutionDropDown.jsx";
import SolutionFilter from "../components/SolutionFilter/SolutionFilter.jsx";
import styled from "styled-components";
import SolutionDashboard from "../components/Dashboard/SolutionDashboard.jsx";

const Main = styled.div`
  margin-top: 4rem;
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
