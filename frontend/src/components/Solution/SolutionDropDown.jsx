import ImpactIcon from "./ImpactIcon.jsx";

import supportersIcon from "./../../assets/other_icons/supporters.png";
import CategoryLabel from "./CategoryLabel.jsx";
import ProgressComponent from "./ProgressBar.jsx";
import Resources from "./Resources.jsx";
import SvgIcon from "./SvgIcon.jsx";
import { SolutionContainer } from "./solution.style.js";

import SolutionButton from "./SolutionButton.jsx";

const CHECKBOX_API_ENDPOINT = "/api/checkbox-status";

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

  const solutionText = text.replace("{impact}", `${impact} megatons per year`);
  const progressText = progress_text.replace("{progress}", progress);

  return (
    <SolutionContainer $visibleOrChecked={isVisible || isChecked}>
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
        <div className="solutionDetails">
          <div>{solutionText}</div>

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
