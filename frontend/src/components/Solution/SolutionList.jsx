import SolutionDropDown from "./SolutionDropDown.jsx";
import useApiRequest from "../../hooks/useApiRequest.js";
import { useEffect, useState } from "react";
import { FilterAndList, SolutionListDiv } from "./solution.style.js";
import SolutionFilter from "../SolutionFilter/SolutionFilter.jsx";

function SolutionList() {
  const { sendRequest: getSolutionData, data: solutionData } =
    useApiRequest("noAuth");
  const { sendRequest: getSelectedData, data: selectedData } =
    useApiRequest("noAuth");
  const [solutionList, setSolutionList] = useState([]);
  const [selectedList, setSelectedList] = useState([1, 9]);
  useEffect(() => {
    getSolutionData("get", "solution/solutions/?limit=30");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (solutionData) {
      setSolutionList(solutionData.results);
    }
  }, [solutionData]);

  useEffect(() => {
    getSelectedData("get", "/solution/user-selections/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedData) {
      setSelectedList(selectedData.selected_solutions);
    }
  }, [selectedData]);

  return (
    <SolutionListDiv>
      <FilterAndList>
        <div className="filterDiv">
          <SolutionFilter />
        </div>
        {solutionList.map((solution) => (
          <SolutionDropDown
            key={solution.id}
            solution={solution}
            isSelected={selectedList.includes(solution.id)}
          />
        ))}
      </FilterAndList>
    </SolutionListDiv>
  );
}

export default SolutionList;
