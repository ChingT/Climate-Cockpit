import React, { useState } from "react";
import filter from "../../assets/other_icons/filter.svg";
import filter_icon from "../../assets/images/Filter Icon(1).png";
import sorting_icon from "../../assets/images/Sort Icon.png";
import {
  DropdownLayout,
  StyledImage,
  DropdownContent,
  DropdownSelect,
  DropdownSort,
  SortingOption,
  TitleAndImage,
  ContainerTop,
} from "./SolutionFilter.style.js";

export default function SolutionFilter() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

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
            <option value="Buildings">Buildings</option>
            <option value="Electricity">Electricity</option>
            <option value="Food">Food</option>
            <option value="Import">Import</option>
            <option value="Industry">Industry</option>
            <option value="Innovation">Innovation</option>
            <option value="Money">Money</option>
            <option value="Nature">Nature</option>
            <option value="Transport">Transport</option>
            <option value="Trash">Trash</option>
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
