import { useEffect, useState } from "react";
import useAutoFetch from "../../hooks/useAutoFetch.js";
import Score from "./Score.jsx";
import {
  FinalContainer,
  ScoreCardContent,
  ScorecardContainer,
  TitleAndBar,
} from "./Scorecard.style.js";
import ScorecardCategory from "./ScorecardCategory.jsx";

export default function ScoreCard() {
  const [categories, setCategories] = useState([]);

  // TODO: fetch categories and totalScore from api
  const { data } = useAutoFetch("get", "solution/categories/");

  useEffect(() => {
    if (data !== null) setCategories(data.results);
  }, [data]);

  const totalScore = categories.reduce(
    (sum, category) => sum + category.impact_from_logged_in_user,
    0,
  );

  const summary = (
    <>
      <>If everybody was like you, </>
      <>Switzerland's emissions would be {-totalScore} lower.</>
    </>
  );
  return (
    <ScorecardContainer>
      <ScoreCardContent>
        {categories.map((category, i) => (
          <ScorecardCategory key={i} category={category} />
        ))}
        <TitleAndBar>
          <FinalContainer>
            {summary}
            <Score score={-totalScore} />
          </FinalContainer>
        </TitleAndBar>
      </ScoreCardContent>
    </ScorecardContainer>
  );
}
