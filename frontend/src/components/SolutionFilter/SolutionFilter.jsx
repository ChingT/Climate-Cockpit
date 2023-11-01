import React, { useState } from 'react';
import filter from '../../assets/other_icons/filter.svg';
import { StyledImage } from './SolutionFilter.style.js';

export default function SolutionFilter() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <StyledImage src={filter} onClick={toggleDropdown} alt="Filter" />
      {isDropdownOpen && (
        <div>
          <label htmlFor="category">Category:</label>
          <select id="category">
            <option value="all">All</option>
            <option value="buildings">Buildings</option>
          </select>

          <label htmlFor="impact">Impact:</label>
          <select id="impact">
            <option value="all">All</option>
            <option value="low">Low</option>
            {/* Add more impact options */}
          </select>

          <label htmlFor="status">Status:</label>
          <select id="status">
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="done">Done</option>
          </select>
          <button>Apply Filter</button>
        </div>
      )}
    </>
  );
}
