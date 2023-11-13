import { useEffect, useState } from "react";
import SolutionDropDown from "./SolutionDropDown.jsx";
import useApiRequest from "../../hooks/useApiRequest.js";
import { FilterAndList, SolutionListDiv } from "./solution.style.js";
import SolutionFilter from "../SolutionFilter/SolutionFilter.jsx";

function SolutionList() {
  const { sendRequest, data } = useApiRequest("noAuth");
  const [solutionList, setSolutionList] = useState([]);
  const [selectedSortOption, setSelectedSortOption] =
    useState("Alphabetically");
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  useEffect(() => {
    let endpoint = "solution/solutions/?limit=30";

    if (selectedSortOption === "Alphabetically") {
      endpoint += "&ordering=name";
    } else if (selectedSortOption === "Impact") {
      endpoint += "&ordering=-impact";
    }
    if (selectedCategory !== "All categories") {
      endpoint += `&category=${selectedCategory}`;
    }

    sendRequest("get", endpoint);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSortOption, selectedCategory]);

  const handleSortChange = (sortOption) => {
    if (sortOption === "Number of Supporters") {
      const sortedSolutions = data.results.slice().sort((a, b) => {
        return b.number_of_supporters - a.number_of_supporters;
      });
      setSolutionList(sortedSolutions);
    } else {
      setSelectedSortOption(sortOption);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleStatusChange = (statusOption) => {
    let filteredSolutions;

    if (statusOption === "All") {
      filteredSolutions = data.results;
    } else if (statusOption === "Selected" || statusOption === "Non-selected") {
      filteredSolutions = data.results.filter((solution) =>
        statusOption === "Selected"
          ? solution.selected_by_logged_in_user
          : !solution.selected_by_logged_in_user,
      );
    } else {
      filteredSolutions = data.results;
    }
    setSolutionList(filteredSolutions);
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
          <SolutionFilter
            onSortChange={handleSortChange}
            onCategoryChange={handleCategoryChange}
            onStatusChange={handleStatusChange}
          />
        </div>
        {solutionList.map((solution, index) => (
          <SolutionDropDown key={index} solution={solution} />
        ))}
      </FilterAndList>
    </SolutionListDiv>
  );
}

export default SolutionList;
