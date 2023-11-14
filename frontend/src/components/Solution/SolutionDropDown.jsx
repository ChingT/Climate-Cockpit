import paper_texture from "../../assets/images/paper_texture.jpg";
import ImpactIcon from "./ImpactIcon.jsx";

import { useState } from "react";
import supportersIcon from "./../../assets/other_icons/supporters.png";
import CategoryLabel from "./CategoryLabel.jsx";
import ProgressComponent from "./ProgressBar.jsx";
import Resources from "./Resources.jsx";
import SvgIcon from "./SvgIcon.jsx";
import { CheckboxContainer, SolutionContainer } from "./solution.style.js";

import SolutionButton from "./SolutionButton.jsx";

export default function SolutionDropDown({ solution }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const {
    category,
    name,
    impact,
    text,
    progress,
    progress_text,
    number_of_supporters,
    button_text,
    icon_name,
    id,
  } = solution;

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

  const solutionText = text.replace("{impact}", `${impact} megatons per year`);
  const progressText = progress_text.replace("{progress}", progress);

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
            <SvgIcon svg_icon={icon_name} />
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
              <CategoryLabel category={category.name} />
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
          <div>{solutionText}</div>
          <br />
          <ProgressComponent
            className="progressBar"
            percentage={progress}
            progress_description={progressText}
          />

          <div></div>

          <Resources solutionId={id} />

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
