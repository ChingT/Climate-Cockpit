import { DashboardCategoriesTotalPoints } from "./dashboard.style.js";

export default function TotalPoints({ emissionEquation }) {
  return (
    <DashboardCategoriesTotalPoints>
      <div>
        <div>Inland Emissions</div>
        <div className="inland-emissions">{emissionEquation.inland}</div>
      </div>
      <div>
        <div>+</div>
        <div>{"\u00A0"}</div>
      </div>
      <div>
        <div>Imports</div>
        <div className="imported-emissions">{emissionEquation.imports}</div>
      </div>
      <div>
        <div>-</div>
        <div>{"\u00A0"}</div>
      </div>
      <div>
        <div>Removal</div>
        <div className="removed-emissions">-{emissionEquation.removed}</div>
      </div>
      <div>
        <div>-</div>
        <div>{"\u00A0"}</div>
      </div>
      <div>
        <div>Solution</div>
        <div className="solution-emissions">-{emissionEquation.solution}</div>
      </div>
      <div>
        <div> =</div>
        <div>{"\u00A0"}</div>
      </div>
      <div>
        <div>Total</div>
        <div>{emissionEquation.total}</div>
      </div>
    </DashboardCategoriesTotalPoints>
  );
}
