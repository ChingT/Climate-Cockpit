import Score from "./Score.jsx";
import {
  ScorecardContainer,
  ScoreCardContent,
  TitleAndBar,
} from "./Scorecard.style.js";
import ScorecardCategory from "./ScorecardCategory.jsx";

export default function ScoreCard() {
  // TODO: fetch categories and totalScore from api
  const totalScore = -34;
  const categories = [
    {
      name: "Electricity",
      levelNames: { 1: "Clean", 2: "Renewable", 3: "Sun Energy" },
      level: 2,
      score: -1,
    },
    {
      name: "Buildings",
      levelNames: {
        1: "No Gas Cooking",
        2: "No Oil Heating",
        3: "Green Building",
      },
      level: 1,
      score: -3,
    },
    {
      name: "Transport",
      levelNames: {
        1: "Electric Car",
        2: "Public & Active Transport",
        3: "No Flying",
      },
      level: 0,
      score: 0,
    },
    {
      name: "Food",
      levelNames: { 1: "Vegetarian", 2: "No Beef & Cheese", 3: "Vegan" },
      level: 3,
      score: -5,
    },
    {
      name: "Trash",
      levelNames: { 1: "Recycling", 2: "Composting", 3: "Zero Waste" },
      level: 2,
      score: -0.5,
    },
    {
      name: "Industry",
      levelNames: {
        1: "No Red Scores",
        2: "Only Good Scores",
        3: "Only Green Scores",
      },
      level: 1,
      score: -10,
    },
    {
      name: "Import",
      levelNames: { 1: "Buy Local", 2: "Reduce & Reuse", 3: "Offset" },
      level: 2,
      score: -10,
    },
    {
      name: "Nature",
      levelNames: {
        1: "Protect Ecosystems",
        2: "Create Ecosystems",
        3: "Leave Half to Nature",
      },
      level: 3,
      score: -4,
    },
    {
      name: "Money",
      levelNames: {
        1: "No Fossil Investments",
        2: "Green Finance",
        3: "Green Investments",
      },
      level: 0,
      score: 0,
    },
    {
      name: "Innovation",
      levelNames: {
        1: "Follow Innovation",
        2: "Support Innovation",
        3: "Innovate Yourself",
      },
      level: 0,
      score: 1,
    },
  ];
  const summary = (
    <>
      <>If everybody was like you, </>
      <>Switzerland's emissions would be {-totalScore} lower.</>
    </>
  );
  return (
    <ScorecardContainer>
      <ScoreCardContent>
        {categories.map((category) => (
          <ScorecardCategory key={category} category={category} />
        ))}
        <TitleAndBar>
          {summary}
          <Score score={totalScore} />
        </TitleAndBar>
      </ScoreCardContent>
    </ScorecardContainer>
  );
}
