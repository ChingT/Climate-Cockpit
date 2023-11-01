import { useState } from "react";
import filter_icon from "../../assets/images/filtering_categories.png";
import sorting_icon from "../../assets/images/sorting_categories.png";
import filter from "../../assets/other_icons/filter.svg";
import {
  ContainerTop,
  DropdownContent,
  DropdownLayout,
  DropdownSelect,
  DropdownSort,
  StyledImage,
  TitleAndImage,
} from "./SolutionFilter.style.js";

export default function SolutionFilter() {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);

  const handleSelectChange = (e) => {
    setSelectedCategory(e.target.value);
    setIsDropdownOpen(false);
  };

  const categories = [
    "All",
    "Buildings",
    "Electricity",
    "Food",
    "Import",
    "Industry",
    "Innovation",
    "Money",
    "Nature",
    "Transport",
    "Trash",
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
        <DropdownSelect value={selectedCategory} onChange={handleSelectChange}>
          {dropdownOptions}
        </DropdownSelect>
      </DropdownSort>
    );
  };

  const CategoryDropdown = dropdown("Category Filter", filter_icon, categories);
  const SortingDropdown = dropdown(
    "Sorting Options",
    sorting_icon,
    sortingOptions
  );
  const StatusDropdown = dropdown("Status Filter", filter_icon, statusOptions);

  return (
    <DropdownLayout>
      <StyledImage src={filter} onClick={toggleDropdown} alt="Filter" />
      {isDropdownOpen && (
        <DropdownContent>
          <StyledImage src={filter} onClick={closeDropdown} alt="Filter" />
          {CategoryDropdown}
          {SortingDropdown}
          {StatusDropdown}
        </DropdownContent>
      )}
    </DropdownLayout>
  );
}
