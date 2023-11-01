import { DashboardCategoriesTotalPoints } from "./dashboard.style.js";
import theme from "../../styles/theme.js";

export default function TotalPoints({
  inlandEmissions,
  importedEmissions,
  removedEmissions,
  totalEmissions,
}) {
  return (
    <DashboardCategoriesTotalPoints>
      <div>
        <div>Inland Emissions</div>
        <div style={{ color: theme.fontColors.emissionColor }}>
          {inlandEmissions}
        </div>
      </div>
      <div>
        <div>+</div>
        <div></div>
      </div>
      <div>
        <div>Imports</div>
        <div style={{ color: theme.fontColors.emissionColor }}>
          +{importedEmissions}
        </div>
      </div>
      <div>
        <div>+</div>
        <div></div>
      </div>
      <div>
        <div>Removal</div>
        <div style={{ color: theme.fontColors.removalColor }}>
          -{removedEmissions}
        </div>
      </div>
      <div>
        <div>-</div>
        <div></div>
      </div>
      <div>
        <div>Solution</div>
        <div style={{ color: theme.fontColors.solutionColor }}>
          ={totalEmissions}
        </div>
      </div>
      <div>
        <div>=</div>
        <div></div>
      </div>
      <div>
        <div>Total</div>
        <div>=116</div>
      </div>
    </DashboardCategoriesTotalPoints>
  );
}
