import { CategoryLabelDiv } from "./solution.style.js";
import theme from "../../styles/theme.js";

function CategoryLabel({ category }) {
  let colourCategoryMapping = {
    electricity: theme.backgroundColors.electricityLabel,
    buildings: theme.backgroundColors.buildingsLabel,
    transport: theme.backgroundColors.transportLabel,
    food: theme.backgroundColors.foodLabel,
    trash: theme.backgroundColors.trashLabel,
    industry: theme.backgroundColors.industryLabel,
    import: theme.backgroundColors.importLabel,
    nature: theme.backgroundColors.natureLabel,
    money: theme.backgroundColors.moneyLabel,
    innovation: theme.backgroundColors.innovationLabel,
  };

  return (
    <CategoryLabelDiv>
      <div style={{ backgroundColor: colourCategoryMapping[category] }}>
        Hello World
      </div>
    </CategoryLabelDiv>
  );
}

export default CategoryLabel;
