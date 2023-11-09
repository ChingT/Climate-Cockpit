import { useState } from "react";
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

export default function SolutionFilter() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

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
