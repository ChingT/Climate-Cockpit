import { CategoryLabel, ImpactIcon } from "./solution.style.js";
import React from "react";
import { ThemeProvider } from "styled-components";
import ProgressComponent from "./ProgressBar.jsx";
import theme from "./theme";

export default function SolutionDropDown() {
  return (
    <>
      <ImpactIcon />
      <CategoryLabel />
      <>Description</>
      <ThemeProvider theme={theme}>
        <ProgressComponent percentage={15} />
      </ThemeProvider>
      {/*<ProgressBar percentage={77} />*/}
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
