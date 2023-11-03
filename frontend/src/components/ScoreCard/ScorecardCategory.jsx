import {
  CategoryBar,
  CategoryPart,
  LevelNames,
  ScorecardContainer,
  ScoreIcon,
  TitleAndBar,
} from "./Scorecard.style.js";
import Score from "./Score.jsx";
import CategoryLabel from "../Solution/CategoryLabel.jsx";

function ScorecardCategory() {
  const data = [
    {
      categoryName: "Electricity",
      levelNames: {
        1: "Clean",
        2: "Renewable",
        3: "Sun Energy",
      },
      categoryLevel: 0,
    },
    {
      categoryName: "Buildings",
      levelNames: {
        1: "No Gas Cooking",
        2: "No Oil Heating",
        3: "Green Building",
      },
      categoryLevel: 1,
    },
    {
      categoryName: "Transport",
      levelNames: {
        1: "Electric Car",
        2: "Public & Active Transport",
        3: "No Flying",
      },
      categoryLevel: 2,
    },
    {
      categoryName: "Food",
      levelNames: {
        1: "Vegetarian",
        2: "No Beef & Cheese",
        3: "Vegan",
      },
      categoryLevel: 3,
    },
    {
      categoryName: "Trash",
      levelNames: {
        1: "Recycling",
        2: "Composting",
        3: "Zero Waste",
      },
      categoryLevel: 0,
    },
    {
      categoryName: "Industry",
      levelNames: {
        1: "No Red Scores",
        2: "Only Good Scores",
        3: "Only Green Scores",
      },
      categoryLevel: 0,
    },
    {
      categoryName: "Import",
      levelNames: {
        1: "Buy Local",
        2: "Reduce & Reuse",
        3: "Offset",
      },
      categoryLevel: 0,
    },
    {
      categoryName: "Nature",
      levelNames: {
        1: "Protect Ecosystems",
        2: "Create Ecosystems",
        3: "Leave Half to Nature",
      },
      categoryLevel: 0,
    },
    {
      categoryName: "Money",
      levelNames: {
        1: "No Fossil Investments",
        2: "Green Finance",
        3: "Green Investments",
      },
      categoryLevel: 0,
    },
    {
      categoryName: "Innovation",
      levelNames: {
        1: "Follow Innovation",
        2: "Support Innovation",
        3: "Innovate Yourself",
      },
      categoryLevel: 0,
    },
  ];
  const totalScore = data.reduce(
    (sum, category) => sum + category.categoryLevel,
    0,
  );
  return (
    <ScorecardContainer>
      {data.map((category, index) => (
        <div key={index}>
          <TitleAndBar>
            <CategoryLabel category={category.categoryName} />
            <CategoryBar>
              {Array.from({ length: 3 }).map((_, partIndex) => (
                <CategoryPart
                  key={partIndex}
                  $isFilled={partIndex < category.categoryLevel}
                  $level={category.categoryLevel}
                />
              ))}
            </CategoryBar>
            <Score score={category.categoryLevel} />
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
      <h2>
        If everybody was like you, Switzerland’s emissions would be{" "}
        <ScoreIcon>{totalScore} lower. </ScoreIcon>{" "}
      </h2>
    </ScorecardContainer>
  );
}

export default ScorecardCategory;
