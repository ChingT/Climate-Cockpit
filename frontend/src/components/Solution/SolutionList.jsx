// Import the styled component
import SolutionFilter from "../SolutionFilter/SolutionFilter.jsx";
import SolutionDropDown from "./SolutionDropDown.jsx";
import { SolutionListDiv } from "./solution.style.js";

let solutions = [
  {
    category: "electricity",
    name: "Electric Cars",
    impact: -5,
    description:
      "If everybody in Switzerland who owns a car, drove an electric car, annual emissions would be 5 megatons lower.",
    progress: 12,
    progress_description: "of all cars in Switzerland are electric.",
    number_of_supporters: 2301,
    button_text: "Yes, I have an electric car",
  },
  // Add more solutions in the same format below
  {
    category: "trash",
    name: "Solar Panels",
    impact: -3,
    description:
      "If more homes in Switzerland used solar panels, it could reduce emissions significantly.",
    progress: 20,
    progress_description: "of homes in Switzerland use solar energy.",
    number_of_supporters: 1578,
    button_text: "I support solar energy",
  },
  {
    category: "trash",
    name: "Recycling Programs",
    impact: -2,
    description:
      "Implementing comprehensive recycling could reduce waste and emissions associated with landfills.",
    progress: 35,
    progress_description: "of waste in Switzerland is recycled.",
    number_of_supporters: 2905,
    button_text: "I recycle regularly",
  },
];

function SolutionList() {
  return (
    <SolutionListDiv>
      <SolutionFilter />
      {solutions.map((solution, index) => (
        <SolutionDropDown key={index} solution={solution} />
      ))}
    </SolutionListDiv>
  );
}

export default SolutionList;
