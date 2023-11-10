import ImpactIcon from "./ImpactIcon.jsx";
import paper_texture from "../../assets/images/paper_texture.jpg";

import { useEffect, useState } from "react";
import supportersIcon from "./../../assets/other_icons/supporters.png";
import eCarIcon from "./../../assets/solution_icons/eCar.svg";
import CategoryLabel from "./CategoryLabel.jsx";
import ProgressComponent from "./ProgressBar.jsx";
import Resources from "./Resources.jsx";
import SvgIcon from "./SvgIcon.jsx";
import { CheckboxContainer, SolutionContainer } from "./solution.style.js";

import SolutionButton from "./SolutionButton.jsx";

const CHECKBOX_API_ENDPOINT = "/api/checkbox-status";

export default function SolutionDropDown({ solution }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const {
    category,
    name,
    impact,
    description,
    progress,
    progress_description,
    number_of_supporters,
    button_text,
  } = solution;

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
  const style = {
    "--background-image": `url(${paper_texture})`,
  };

  return (
    <SolutionContainer $visibleOrChecked={isVisible || isChecked}>
      <div className="solutionBar" onClick={handleSolutionDropDown}>
        <div className="solutionBarLeft">
          <CheckboxContainer>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="custom-checkbox"
            />
          </CheckboxContainer>
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
        <div className="solutionDetails" style={style}>
          <div>{description}</div>
          <br />
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
