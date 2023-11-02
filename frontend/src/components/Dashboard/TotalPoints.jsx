import { DashboardCategoriesTotalPoints } from "./dashboard.style.js";

export default function TotalPoints({
  inlandEmissions,
  importedEmissions,
  removedEmissions,
  solutionEmissions,
  totalEmissions,
}) {
  return (
    <DashboardCategoriesTotalPoints>
      <div>
        <div>Inland Emissions</div>
        <div className="inland-emissions">{inlandEmissions}</div>
      </div>
      <div>
        <div>+</div>
        <div></div>
      </div>
      <div>
        <div>Imports</div>
        <div className="imported-emissions">{importedEmissions}</div>
      </div>
      <div>
        <div>+</div>
        <div></div>
      </div>
      <div>
        <div>Removal</div>
        <div className="removed-emissions">{removedEmissions}</div>
      </div>
      <div>
        <div>-</div>
        <div></div>
      </div>
      <div>
        <div>Solution</div>
        <div className="solution-emissions">{solutionEmissions}</div>
      </div>
      <div>
        <div>=</div>
        <div></div>
      </div>
      <div>
        <div>Total</div>
        <div>{totalEmissions}</div>
      </div>
    </DashboardCategoriesTotalPoints>
  );
}
