import styled from "styled-components";
import theme from "../../styles/theme.js";

export const Main = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 5rem;
  overflow-y: scroll;
  display: flex;
  gap: 2rem;
  flex-direction: row;
`;
export const DashboardGridDiv = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin-left: 3rem;
  box-sizing: border-box;
  border: 2px solid ${(props) => props.theme.emissionColors.inland};
  position: relative;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  & > div > div {
    display: flex;

    flex-direction: row;
    align-items: center;
  }

  .left-column {
    justify-content: space-between;
    width: 60%;
    padding-right: 0.9%;
  }

  .right-column {
    display: flex;
    justify-content: flex-end;
    width: 40%;
  }

  .innovation {
    display: flex;
    justify-content: flex-start;
  }

  .money {
    display: flex;

    justify-content: flex-end;
  }
`;

export const StyledH2 = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-left: 3rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;
export const StyledH3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const DashboardCategoriesTotalPoints = styled.div`
  padding-top: 5rem;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  height: 10vh;
  border-bottom: 1.2px solid ${theme.colors.solutionPagePrimaryColor};
  font-size: ${(props) => props.theme.fontSize.equation};
  color: ${(props) => props.theme.fontColors.primary};
  font-weight: bold;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 80%;
  }

  .inland-emissions {
    color: ${(props) => props.theme.fontColors.emissionColor};
  }

  .imported-emissions {
    color: ${(props) => props.theme.fontColors.emissionColor};
  }

  .removed-emissions {
    color: ${(props) => props.theme.fontColors.removalColor};
  }

  .solution-emissions {
    color: ${(props) => props.theme.fontColors.solutionColor};
  }
`;
export const Inland = styled.div`
  border: 2px solid ${(props) => props.theme.emissionColors.imported};
`;
export const Import = styled.div`
  box-sizing: border-box;
  border: 2px solid ${(props) => props.theme.emissionColors.imported};
  position: relative;
  width: 90%;
  margin-left: 3rem;
`;

export const Removal = styled.div`
  box-sizing: border-box;
  border: 2px solid ${(props) => props.theme.emissionColors.removed};
  position: relative;
  width: 90%;
  margin-left: 3rem;
`;
export const Innovation = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin-left: 3rem;
  box-sizing: border-box;
  position: relative;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  & > div > div {
    display: flex;

    flex-direction: row;
    align-items: center;
  }
`;

export const CircleShapedPoints = styled.div`
  width: 45px;
  height: 45px;
  position: absolute;
  top: -1.2rem;
  right: -1.2rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.emissionColors[props.$type]};
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.fontColors.emissionLevel};
`;

export const LeftBar = styled.div`
  width: 50.6%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-right: 1.2px solid ${theme.colors.solutionPagePrimaryColor};
`;
export const RightBar = styled.div`
  width: 46%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
