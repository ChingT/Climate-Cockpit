import { CategoryLabelDiv } from "./solution.style.js";
import theme from "../../styles/theme.js";

function CategoryLabel({ category }) {
  let colourCategoryMapping = {
    electricity: theme.categoryLabels.electricity,
    buildings: theme.categoryLabels.buildings,
    transport: theme.categoryLabels.transport,
    food: theme.categoryLabels.food,
    trash: theme.categoryLabels.trash,
    industry: theme.categoryLabels.industry,
    import: theme.categoryLabels.import,
    nature: theme.categoryLabels.nature,
    money: theme.categoryLabels.money,
    innovation: theme.categoryLabels.innovation,
  };
  const backgroundColor =
    colourCategoryMapping[category] || theme.categoryLabels.default;

  return (
    <CategoryLabelDiv $backgroundColor={backgroundColor}>
      <div>{category}</div>
    </CategoryLabelDiv>
  );
}

export default CategoryLabel;
