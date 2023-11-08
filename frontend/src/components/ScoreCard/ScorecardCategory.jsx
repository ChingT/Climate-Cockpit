import CategoryLabel from "../Solution/CategoryLabel.jsx";
import Score from "./Score.jsx";
import {
  BarAndLevel,
  CategoryBar,
  CategoryPart,
  CategoryWrap,
  LevelNames,
  TitleAndBar,
} from "./Scorecard.style.js";
import CategoryLabelScoreCard from "./CategoryLabelScoreCard.jsx";

function ScorecardCategory({ category }) {
  return (
    <div>
      <TitleAndBar>
        <CategoryWrap>
          <CategoryLabelScoreCard category={category.name} />
        </CategoryWrap>
        <BarAndLevel>
          <CategoryBar>
            {Array.from({ length: 3 }).map((_, partIndex) => (
              <CategoryPart
                key={partIndex}
                $isFilled={partIndex < category.level}
                $level={category.level}
              />
            ))}
          </CategoryBar>
          <LevelNames>
            {Object.keys(category.levelNames).map((level) => (
              <span key={level}>
                {category.levelNames[level]}
                {parseInt(level) !== Object.keys(category.levelNames).length}
              </span>
            ))}
          </LevelNames>
        </BarAndLevel>
        <Score score={category.score} />
      </TitleAndBar>
    </div>
  );
}

export default ScorecardCategory;
