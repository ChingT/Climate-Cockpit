import React from "react";
import {
    CategoryBar,
    CategoryPart,
    LevelNames,
    ScorecardContainer, TitleAndBar,
} from "./Scorecard.style.js";
import {CategoryLabelDiv} from "../Solution/solution.style.js";
import Score from "./Score.jsx";

function ScorecardCategory() {
  const data = [
    {
      categoryName: "Electricity",
      levelNames: {
        1: "Clean",
        2: "Renewable",
        3: "Sun Energy",
      },
      categoryLevel: 2,
    },
  ];

  return (
    <ScorecardContainer>
      {data.map((category, index) => (
        <div key={index}>
            <TitleAndBar>
                <CategoryLabelDiv>{category.categoryName}</CategoryLabelDiv>
          <CategoryBar>
            {Array.from({ length: 3 }).map((_, partIndex) => (
              <CategoryPart
                key={partIndex}
                isFilled={partIndex < category.categoryLevel}
              />
            ))}
          </CategoryBar>
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
      ))}
        <Score />
    </ScorecardContainer>
  );
}

export default ScorecardCategory;
