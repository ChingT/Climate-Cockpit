import { useState } from "react";
import filter from "../../assets/other_icons/filter.svg";
import filter_icon from "../../assets/images/filtering_categories.png";
import sorting_icon from "../../assets/images/sorting_categories.png";
import {
  ContainerTop,
  DropdownContent,
  DropdownLayout,
  DropdownSelect,
  DropdownSort,
  SortingOption,
  StyledImage,
  TitleAndImage,
} from "./SolutionFilter.style.js";

export default function SolutionFilter() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectChange = (e) => {
    setSelectedCategory(e.target.value);
    setIsDropdownOpen(false);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <DropdownLayout>
      <StyledImage src={filter} onClick={toggleDropdown} alt="Filter" />
      {isDropdownOpen && (
        <DropdownContent>
          <ContainerTop>
            <TitleAndImage>
              <img src={filter_icon} alt="Filter Icon" />
              <h3>Category Filter</h3>
            </TitleAndImage>
            <StyledImage
              src={filter}
              style={{ width: "27px", paddingBottom: "1rem" }}
              onClick={closeDropdown}
              alt="Close Filter"
            />
          </ContainerTop>
          <DropdownSelect
            value={selectedCategory}
            onChange={handleSelectChange}
          >
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </DropdownSelect>
          <DropdownSort>
            <TitleAndImage>
              <img
                src={sorting_icon}
                alt="Sort Icon"
                style={{ width: "20px" }}
              />
              <h3>Sorting Options</h3>
            </TitleAndImage>
            <SortingOption value="Impact">Impact</SortingOption>
            <SortingOption value="Alphabetically">Alphabetically</SortingOption>
            <SortingOption value="Number of Supporters">
              Number of Supporters
            </SortingOption>
          </DropdownSort>
          <DropdownSort>
            <TitleAndImage>
              <img src={filter_icon} alt="Filter Icon" />
              <h3>Status Filter</h3>
            </TitleAndImage>
            <SortingOption value="Open">Open</SortingOption>
            <SortingOption value="Done">Done</SortingOption>
          </DropdownSort>
        </DropdownContent>
      )}
    </DropdownLayout>
  );
}
