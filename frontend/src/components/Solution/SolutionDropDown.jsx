import ImpactIcon from "./ImpactIcon.jsx";
import ProgressComponent from "./ProgressBar.jsx";
import { CategoryLabel } from "./solution.style.js";
import Resources from "./Resources.jsx";
import theme from "../../styles/theme.js";

import React from "react";
import { ThemeProvider } from "styled-components";

export default function SolutionDropDown() {
  return (
    <>
      <ImpactIcon />
      <CategoryLabel />
      <>Description</>
      <ProgressComponent percentage={31} />
      <ThemeProvider theme={theme}>
        <Resources />
      </ThemeProvider>

      <>Level Buttons</>
    </>
  );
}
