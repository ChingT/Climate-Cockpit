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
  console.log(category)
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
                $isFilled={partIndex < category.level_from_logged_in_user}
                $level={category.level_from_logged_in_user}
              />
            ))}
          </CategoryBar>
          <LevelNames>
            {Object.keys(category.solution_names).map(
              (level_from_logged_in_user) => (
                <span key={level_from_logged_in_user}>
                  {category.solution_names[level_from_logged_in_user]}
                  {parseInt(level_from_logged_in_user) !==
                    Object.keys(category.solution_names).length}
                </span>
              ),
            )}
          </LevelNames>
        </BarAndLevel>
        <Score score={category.impact_from_logged_in_user} />
      </TitleAndBar>
    </div>
  );
}

export default ScorecardCategory;
