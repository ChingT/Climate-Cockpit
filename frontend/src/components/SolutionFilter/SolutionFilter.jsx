import { useEffect, useState } from "react";
import funnelIcon from "../../assets/images/filtering_categories.png";
import sortingIcon from "../../assets/images/sorting_categories.png";
import filterIcon from "../../assets/other_icons/filter.svg";
import {
  ContainerTop,
  DropdownContent,
  DropdownLayout,
  DropdownSelect,
  DropdownSort,
  StyledImage,
  TitleAndImage,
} from "./SolutionFilter.style.js";
import useApiRequest from "../../hooks/useApiRequest.js";

export default function SolutionFilter({ onSortChange }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const { sendRequest, data } = useApiRequest("noAuth");

  useEffect(() => {
    sendRequest("get", "/solution/categories/");
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleSelectChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedOption(selectedOption);
    if (onSortChange) {
      onSortChange(selectedOption);
    }

    setIsDropdownOpen(false);
  };
  const categories = [
    "all categories",
    ...(data && data.results
      ? data.results.map((category) => category.name)
      : []),
  ];

  const sortingOptions = ["Impact", "Alphabetically", "Number of Supporters"];
  const statusOptions = ["Open", "Done"];

  const dropdown = (title, icon, options) => {
    const dropdownOptions = options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
    return (
      <DropdownSort>
        <ContainerTop>
          <TitleAndImage>
            <img src={icon} alt={`Icon for ${title}`} />
            <h3>{title}</h3>
          </TitleAndImage>
        </ContainerTop>
        <DropdownSelect value={selectedOption} onChange={handleSelectChange}>
          {dropdownOptions}
        </DropdownSelect>
      </DropdownSort>
    );
  };

  const CategoryDropdown = dropdown("Category Filter", funnelIcon, categories);
  const SortingDropdown = dropdown(
    "Sorting Options",
    sortingIcon,
    sortingOptions,
  );
  const StatusDropdown = dropdown("Status Filter", funnelIcon, statusOptions);

  return (
    <DropdownLayout>
      <StyledImage src={filterIcon} onClick={toggleDropdown} alt="Filter" />
      {isDropdownOpen && (
        <DropdownContent>
          {CategoryDropdown}
          {SortingDropdown}
          {StatusDropdown}
        </DropdownContent>
      )}
    </DropdownLayout>
  );
}
