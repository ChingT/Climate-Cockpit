import ImpactIcon from "./ImpactIcon.jsx";

import ProgressComponent from "./ProgressBar.jsx";
import Resources from "./Resources.jsx";
import CategoryLabel from "./CategoryLabel.jsx";
import { SolutionContainer } from "./solution.style.js";
import React, { useState, useEffect } from "react";
import eCarIcon from "./../../assets/solution_icons/eCar.svg";
import SvgIcon from "./SvgIcon.jsx";
import supportersIcon from "./../../assets/other_icons/supporters.png";

import SolutionButton from "./SolutionButton.jsx";

const CHECKBOX_API_ENDPOINT = "/api/checkbox-status";

let supporter = "User";
let category = "electricity";
let name = "Electric Cars";
let impact = -5;
let description =
  "If everybody in Switzerland who owns a car, drove an electric car, annual emissions would be 5 megatons lower. ";
let progress = 12;
let progress_description = "of all cars in Switzerland are electric.";
let number_of_supporters = 2301;
let button_text = "Yes, I have an electric car";

export default function SolutionDropDown() {
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  const handleCheckboxChange = (event) => {
    const newCheckedStatus = event.target.checked;
    setIsChecked(newCheckedStatus);
  };

  const handleButtonSelectionChange = (isSelected) => {
    setIsChecked(isSelected);
  };
  const handleSolutionDropDown = () => {
    setIsVisible(!isVisible);
  };

  return (
    <SolutionContainer visibleOrChecked={isVisible || isChecked}>
      <div className="solutionBar" onClick={handleSolutionDropDown}>
        <div className="solutionBarLeft">
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
          <div className="solutionName">{name}</div>
        </div>
        <div className="solutionBarRight">
          <div className="solutionBarRightInner">
            <div className="supporters">
              <img src={supportersIcon} alt="Supporters" />
              {number_of_supporters}
            </div>
            <div>
              <CategoryLabel category={category} />
            </div>
          </div>
          <div>
            <ImpactIcon
              impact={impact}
              visibleOrChecked={isVisible || isChecked}
            />
          </div>
        </div>
      </div>
      {isVisible && (
        <div className="solutionDetails">
          <div>{description}</div>

          <ProgressComponent
            className="progressBar"
            percentage={progress}
            progress_description={progress_description}
          />

          <div></div>

          <Resources />

          <div className="solutionButton">
            <SolutionButton
              button_text={button_text}
              initialSelected={isChecked}
              onSelectionChange={handleButtonSelectionChange}
            />
          </div>
        </div>
      )}
    </SolutionContainer>
  );
}
