import Hero3DCloud from "../components/HeroPageComponents/Hero3DCloud.jsx";
import HeroPageButton from "../components/HeroPageComponents/HeroPageButton.jsx";
import styled from "styled-components";

const Main = styled.div`
  margin-top: 4rem;
`;
const HeroPage = () => {
  return (
    <Main>
      <Hero3DCloud />
      <HeroPageButton />
    </Main>
  );
};

export default HeroPage;
