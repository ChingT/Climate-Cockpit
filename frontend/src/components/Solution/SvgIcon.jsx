import { SvgIconDiv } from "./solution.style.js";
import NoOil from "../../assets/solution_icons/NoOil.svg";
import GreenBuilding from "../../assets/solution_icons/GreenBuilding.svg";
import CleanElectricity from "../../assets/solution_icons/CleanElectricity.svg";
import RenewableElectricity from "../../assets/solution_icons/RenewableElectricity.svg";
import SolarPanels from "../../assets/solution_icons/SolarPanel.svg";
import Vegetarian from "../../assets/solution_icons/Vegetarian.svg";
import NoCow from "../../assets/solution_icons/NoCow.svg";
import Vegan from "../../assets/solution_icons/Vegan.svg";
import Local from "../../assets/solution_icons/Local.svg";
import Reduce from "../../assets/solution_icons/Reduce.svg";
import Offset from "../../assets/solution_icons/Offset.svg";
import ClimateScore_red from "../../assets/solution_icons/ClimateScore_red.svg";
import ClimateScore_yellow from "../../assets/solution_icons/ClimateScore_yellow.svg";
import ClimateScore_green from "../../assets/solution_icons/ClimateScore_green.svg";
import FollowInnovation from "../../assets/solution_icons/FollowInnovation.svg";
import SupportInnovation from "../../assets/solution_icons/SupportInnovation.svg";
import InnovateYourself from "../../assets/solution_icons/InnovateYourself.svg";
import NoFossilInvestments from "../../assets/solution_icons/NoFossilInvestment.svg";
import GreenFinance from "../../assets/solution_icons/GreenFinance.svg";
import GreenTransition from "../../assets/solution_icons/GreenTransition.svg";
import ProtectEcosystems from "../../assets/solution_icons/ProtectEcosystems.svg";
import CreateEcosystems from "../../assets/solution_icons/CreateEcosystems.svg";
import HalfEarth from "../../assets/solution_icons/HalfEarth.svg";
import NoFlying from "../../assets/solution_icons/NoFlying.svg";
import eCar from "../../assets/solution_icons/eCar.svg";
import Bicycle from "../../assets/solution_icons/Bicycle.svg";
import Recycling from "../../assets/solution_icons/Recycling.svg";
import Compost from "../../assets/solution_icons/Compost.svg";
import ZeroWaste from "../../assets/solution_icons/ZeroWaste.svg";
import NoGas from "../../assets/solution_icons/NoGas.svg";

const ICONS = {
  NoOil,
  NoGas,
  GreenBuilding,
  CleanElectricity,
  RenewableElectricity,
  SolarPanels,
  Vegetarian,
  NoCow,
  Vegan,
  Local,
  Reduce,
  Offset,
  ClimateScore_red,
  ClimateScore_yellow,
  ClimateScore_green,
  FollowInnovation,
  SupportInnovation,
  InnovateYourself,
  NoFossilInvestments,
  GreenFinance,
  GreenTransition,
  ProtectEcosystems,
  CreateEcosystems,
  HalfEarth,
  NoFlying,
  eCar,
  Bicycle,
  Recycling,
  Compost,
  ZeroWaste,
};

function SvgIcon({ svg_icon, altText }) {
  const IconSrc = ICONS[svg_icon];

  return (
    <SvgIconDiv>
      <img src={IconSrc} alt={altText || svg_icon || "SVG Icon"} />
    </SvgIconDiv>
  );
}

export default SvgIcon;
