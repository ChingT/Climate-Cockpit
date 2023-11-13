import Score from "./Score.jsx";
import {
  FinalContainer,
  ScorecardContainer,
  ScoreCardContent,
  TitleAndBar,
} from "./Scorecard.style.js";
import ScorecardCategory from "./ScorecardCategory.jsx";
import { useEffect, useState } from "react";
import useApiRequest from "../../hooks/useApiRequest.js";

export default function ScoreCard() {
  const { sendRequest, data } = useApiRequest("noAuth");
  const [categories, setCategories] = useState([]);

  // TODO: fetch categories and totalScore from api
  useEffect(() => {
    sendRequest("get", "/solution/categories/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) {
      setCategories(data.results);
    }
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
        {categories.map((category) => (
          <ScorecardCategory key={category} category={category} />
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
