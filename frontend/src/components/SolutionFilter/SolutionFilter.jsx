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

export default function SolutionFilter({ onSortChange, onCategoryChange }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { sendRequest, data } = useApiRequest("noAuth");

  useEffect(() => {
    sendRequest("get", "/solution/categories/");
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleSortChange = (e) => {
    const sortOption = e.target.value;
    setSelectedSortOption(sortOption);
    if (onSortChange) {
      onSortChange(sortOption);
    }
    toggleDropdown();
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
    toggleDropdown();
  };

  const categories = [
    "all categories",
    ...(data && data.results
      ? data.results.map((category) => category.name)
      : []),
  ];

  const sortingOptions = ["Impact", "Alphabetically", "Number of Supporters"];
  const statusOptions = ["Open", "Done"];

  const dropdown = (title, icon, options, handleChange) => {
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
        <DropdownSelect value={handleChange === handleSortChange ? selectedSortOption
            : selectedCategory} onChange={handleChange}>
          {dropdownOptions}
        </DropdownSelect>
      </DropdownSort>
    );
  };

  const SortingDropdown = dropdown(
    "Sorting Options",
    sortingIcon,
    sortingOptions,
    handleSortChange
  );
  const CategoryDropdown = dropdown(
    "Category Filter",
    funnelIcon,
    categories,
    handleCategoryChange
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
