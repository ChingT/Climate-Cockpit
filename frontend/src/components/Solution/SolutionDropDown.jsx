import ImpactIcon from "./ImpactIcon.jsx";

import ProgressComponent from "./ProgressBar.jsx";
import Resources from "./Resources.jsx";
import CategoryLabel from "./CategoryLabel.jsx";
import { SolutionContainer } from "./solution.style.js";
import React, { useState, useEffect } from "react";
import eCarIcon from "./../../assets/solution_icons/eCar.svg";
import SvgIcon from "./SvgIcon.jsx";
import supportersIcon from "./../../assets/other_icons/supporters.png";
import { Link } from "react-router-dom";
import { ButtonsStyle } from "../../styles/buttons.style.js";
import SolutionButton from "./SolutionButton.jsx";

const CHECKBOX_API_ENDPOINT = "/api/checkbox-status";

// Assumed input from backend
let supporter = "User";
let category = "electricity";
let name = "Electric Cars";
let impact = -5;
let description =
  "If everybody in Switzerland who owns a car, drove an electric car, annual emissions would be 5 megatons lower. ";
let progress = 4;
let progress_description = "of all cars in Switzerland are electric.";
let number_of_supporters = 2301;
let videos_title = "How to drive an electric car";
let videos_url = "Video_URL";
let news_title = "Electric car news";
let news_url = "News_URL";
let book_title = "Electric car book";
let book_url = "Book_URL";

export default function SolutionDropDown() {
  const [isChecked, setIsChecked] = useState(false);

  // Fetch checkbox status from API
  useEffect(() => {
    const fetchCheckboxStatus = async () => {
      try {
        const response = await fetch(CHECKBOX_API_ENDPOINT);
        const data = await response.json();
        setIsChecked(data.isChecked);
      } catch (error) {
        console.error("Failed to fetch checkbox status:", error);
      }
    };

    fetchCheckboxStatus();
  }, []);

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    // Here you could also send the new status to the API if needed
  };
  return (
    <SolutionContainer>
      <div>
        <div>
          <div>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </div>
          <div>
            <SvgIcon svg_icon={eCarIcon} />
          </div>
          <div>{name}</div>
        </div>
        <div>
          <div>
            <div className="supporters">
              <img src={supportersIcon} alt="Supporters" />

              {number_of_supporters}
            </div>
            <div>
              <CategoryLabel category={category} />
            </div>
          </div>
          <div>
            <ImpactIcon impact={impact} />
          </div>
        </div>
      </div>
      <div>
        <div>{description}</div>
        <div>
          <ProgressComponent
            percentage={progress}
            progress_description={progress_description} // assuming progress_description is a string variable
          />
        </div>
        <div></div>
        <div>
          <Resources />
        </div>
        <div>
          <SolutionButton />
        </div>
      </div>
    </SolutionContainer>
  );
}
