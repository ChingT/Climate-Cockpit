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

export default function SolutionFilter({
  onSortChange,
  onCategoryChange,
  onStatusChange,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] =
    useState("Alphabetically");
  const [selectedCategory, setSelectedCategory] = useState("all categories");
  const [selectedStatus, setSelectedStatus] = useState("");
  const { sendRequest, data } = useApiRequest("noAuth");

  useEffect(() => {
    sendRequest("get", "/solution/categories/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleStatusChange = (e) => {
    const statusOption = e.target.value;
    setSelectedStatus(
      statusOption === "Non-selected" ? "!selected_by_logged_in_user" : "Selected",
    );
    if (onStatusChange) {
      onStatusChange(statusOption);
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
  const statusOptions = ["All", "Non-selected", "Selected"];

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
        <DropdownSelect
          value={
            handleChange === handleSortChange
              ? selectedSortOption
              : handleChange === handleCategoryChange
              ? selectedCategory
              : selectedStatus
          }
          onChange={handleChange}
        >
          {dropdownOptions}
        </DropdownSelect>
      </DropdownSort>
    );
  };

  const SortingDropdown = dropdown(
    "Sorting Options",
    sortingIcon,
    sortingOptions,
    handleSortChange,
  );
  const CategoryDropdown = dropdown(
    "Category Filter",
    funnelIcon,
    categories,
    handleCategoryChange,
  );
  const StatusDropdown = dropdown(
    "Status Filter",
    funnelIcon,
    statusOptions,
    handleStatusChange,
  );

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
