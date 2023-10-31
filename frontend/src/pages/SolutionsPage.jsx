import TotalPoints from "../components/Dashboard/TotalPoints.jsx";
import DashboardCategoriesGrid
    from "../components/Dashboard/DashboardCategoriesGrid.jsx";
import SolutionDropDown from "../components/Solution/SolutionDropDown.jsx";
import SolutionFilter from "../components/SolutionFilter/SolutionFilter.jsx";

const SolutionsPage = () => {

    return (
        <>
            <TotalPoints />
            <DashboardCategoriesGrid />
            <SolutionFilter />
            <SolutionDropDown />
        </>
    )
}

export default SolutionsPage