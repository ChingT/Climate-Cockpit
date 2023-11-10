// Import the styled component
import SolutionDropDown from "./SolutionDropDown.jsx";
import { SolutionListDiv } from "./solution.style.js";
import useApiRequest from "../../hooks/useApiRequest.js";
import { useEffect, useState } from "react";

function SolutionList() {
  const { sendRequest, data } = useApiRequest("noAuth");
  const [solutionList, setSolutionList] = useState([]);

  useEffect(() => {
    sendRequest("get", "solution/solutions/?limit=30");
  }, [sendRequest]);

  useEffect(() => {
    if (data) {
      setSolutionList(data.results);
    }
  }, [data]);

  return (
    <SolutionListDiv>
      {solutionList.map((solution, index) => (
        <SolutionDropDown key={index} solution={solution} />
      ))}
    </SolutionListDiv>
  );
}

export default SolutionList;
