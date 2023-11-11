import { useEffect, useState } from "react";
import SolutionDropDown from "./SolutionDropDown.jsx";
import useApiRequest from "../../hooks/useApiRequest.js";
import { FilterAndList, SolutionListDiv } from "./solution.style.js";
import SolutionFilter from "../SolutionFilter/SolutionFilter.jsx";

function SolutionList() {
  const { sendRequest, data } = useApiRequest("noAuth");
  const [solutionList, setSolutionList] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState("");

  useEffect(() => {
    let endpoint = "solution/solutions/?limit=30";

    if (selectedSortOption === "Alphabetically") {
      endpoint += "&ordering=name";
    } else if (selectedSortOption === "Number of Supporters") {
      endpoint += "&ordering=-number_of_supporters";
    } else if (selectedSortOption === "Impact") {
      endpoint += "&ordering=-impact";
    }

    sendRequest("get", endpoint);
  }, [selectedSortOption]);

  const handleSortChange = (sortOption) => {
    setSelectedSortOption(sortOption);
  };

  useEffect(() => {
    if (data) {
      setSolutionList(data.results);
    }
  }, [data]);

  return (
    <SolutionListDiv>
      <FilterAndList>
        <div className="filterDiv">
          <SolutionFilter onSortChange={handleSortChange} />
        </div>
        {solutionList.map((solution, index) => (
          <SolutionDropDown key={index} solution={solution} />
        ))}
      </FilterAndList>
    </SolutionListDiv>
  );
}

export default SolutionList;
