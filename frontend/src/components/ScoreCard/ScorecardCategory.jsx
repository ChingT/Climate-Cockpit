import CategoryLabel from "../Solution/CategoryLabel.jsx";
import Score from "./Score.jsx";
import {
  CategoryBar,
  CategoryPart,
  LevelNames,
  TitleAndBar,
} from "./Scorecard.style.js";

function ScorecardCategory({ category }) {
  return (
    <div>
      <TitleAndBar>
        <CategoryLabel category={category.name} />
        <CategoryBar>
          {Array.from({ length: 3 }).map((_, partIndex) => (
            <CategoryPart
              key={partIndex}
              $isFilled={partIndex < category.level}
              $level={category.level}
            />
          ))}
        </CategoryBar>
        <Score score={category.score} />
      </TitleAndBar>

      <LevelNames>
        {Object.keys(category.levelNames).map((level) => (
          <span key={level}>
            {category.levelNames[level]}
            {parseInt(level) !== Object.keys(category.levelNames).length}
          </span>
        ))}
      </LevelNames>
    </div>
  );
}

export default ScorecardCategory;
