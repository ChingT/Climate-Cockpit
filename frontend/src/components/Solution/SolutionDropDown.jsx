import { CategoryLabel, ImpactIcon } from "./solution.style.js";
import React from "react";
import { ThemeProvider } from "styled-components";
import ProgressComponent from "./ProgressBar.jsx";
import theme from "../../styles/theme.js";

export default function SolutionDropDown() {
  return (
    <>
      <ImpactIcon />
      <CategoryLabel />
      <>Description</>
      <ThemeProvider theme={theme}>
        <ProgressComponent percentage={31} />
      </ThemeProvider>
      <Resources />
      <>Level Buttons</>
    </>
  );
}

function Resources() {
  return (
    <>
      <>Tabs(videos, news, books)</>
      <>Embedded videos / links</>
    </>
  );
}
