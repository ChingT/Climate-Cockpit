import industry from "../../assets/dashboard_icons/Indstry.png";
import industryBlue from "../../assets/dashboard_icons/Indstry_Blue.png";
import buildingIndustry from "../../assets/dashboard_icons/Buildings_Commercial.png";
import buildingIndustryBlue from "../../assets/dashboard_icons/Buildings_Commercial_Blue.png";
import Trucks from "../../assets/dashboard_icons/Transport_Trucks.png";
import TrucksBlue from "../../assets/dashboard_icons/Transport_Trucks_Blue.png";
import freightPlanes from "../../assets/dashboard_icons/Transport_Plane_Freight.png";
import freightPlanesBlue from "../../assets/dashboard_icons/Transport_Plane_Freight_Blue.png";
import trashIndustry from "../../assets/dashboard_icons//Trash_Industry.png";
import trashIndustryBlue from "../../assets/dashboard_icons/Trash_Industry_Blue.png";
import buildingResidentialIcon from "../../assets/dashboard_icons/Buildings_Residential.png";
import buildingResidentialIconBlue from "../../assets/dashboard_icons/Buildings_Residential_Blue.png";
import passengerPlaneIcon from "../../assets/dashboard_icons/Transport_Plane_People.png";
import passengerPlaneIconBlue from "../../assets/dashboard_icons/Transport_Plane_People_Blue.png";
import trashHouseholdsIcon from "../../assets/dashboard_icons/Trash_Residential.png";
import trashHouseholdsIconBlue from "../../assets/dashboard_icons/Trash_Residential_Blue.png";
import carIcon from "../../assets/dashboard_icons/Transport_Cars.png";
import carIconBlue from "../../assets/dashboard_icons/Transport_Cars_Blue.png";
import cowMilkIcon from "../../assets/dashboard_icons/Agriculture_Cow_Milk.png";
import cowMilkIconBlue from "../../assets/dashboard_icons/Agriculture_Cow_Milk_Blue.png";
import cowMeatIcon from "../../assets/dashboard_icons/Agriculture_Cow_Meat.png";
import cowMeatIconBlue from "../../assets/dashboard_icons/Agriculture_Cow_Meat_Blue.png";
import otherMeatIcon from "../../assets/dashboard_icons/Agriculture_Other_Meat.png";
import otherMeatIconBlue from "../../assets/dashboard_icons/Agriculture_Other_Meat_Blue.png";
import plantsIcon from "../../assets/dashboard_icons/Agriculture_Plants.png";
import plantsIconBlue from "../../assets/dashboard_icons/Agriculture_Plants_Blue.png";
import electricityIcon from "../../assets/dashboard_icons/Electricity.png";
import electricityIconBlue from "../../assets/dashboard_icons/Electricity_Blue.png";
import importsIcon from "../../assets/dashboard_icons/Imports.png";
import importsIconBlue from "../../assets/dashboard_icons/ImportsBlue.png";
import removalIcon from "../../assets/dashboard_icons/Nature.png";
import {
  DashboardGridDiv,
  Import,
  Removal,
  StyledH2,
} from "./dashboard.style.js";
import CircleShapedEmissionPoints from "./CircleShapedEmissionPoints.jsx";

export default function DashboardGrid() {
  const totalIndustry = 10;
  const reducedIndustry = 0;

  const totalBuildingCommercial = 4;
  const reducedBuildingCommercial = 0;

  const totalTrucks = 3;
  const reducedTrucks = 0;

  const totalFreightPlanes = 1;
  const reducedFreightPlanes = 0;

  const totalTrashIndustry = 2;
  const reducedTrashIndustry = 0;

  const totalBuildingResidential = 8;
  const reducedBuildingResidential = 0;

  const totalPassengerPlanes = 1;
  const reducedPassengerPlanes = 0;

  const totalTrashHouseholds = 1;
  const reducedTrashHouseholds = 0;

  const totalCars = 10;
  const reducedCars = 0;

  const totalCowMilk = 2;
  const reducedCowMilk = 0;

  const totalCowMeat = 2;
  const reducedCowMeat = 0;

  const totalOtherMeat = 1;
  const reducedOtherMeat = 0;

  const totalPlants = 1;
  const reducedPlants = 0;

  const totalElectricity = 1;
  const reducedElectricity = 0;

  const totalImports = 1;
  const reducedImports = 0;

  const totalRemoval = 2;
  const additionalRemoval = 1;

  const imageStyle = {
    width: "3.7vw", // Set the desired width here
    height: "3.8vw", // Set the desired height here
  };

  const renderIcons = (count, imageUrl) => {
    return Array.from({ length: count }).map((_, index) => (
      <img src={imageUrl} key={index} style={imageStyle} />
    ));
  };

  return (
    <>
        <StyledH2>Inland Emissions</StyledH2>
      <DashboardGridDiv>
        <p>Industry</p>
        <div>
          {renderIcons(totalIndustry - reducedIndustry, industry)}
          {renderIcons(reducedIndustry, industryBlue)}
        </div>
        <div>
          {renderIcons(
            totalBuildingCommercial - reducedBuildingCommercial,
            buildingIndustry,
          )}
          {renderIcons(reducedBuildingCommercial, buildingIndustryBlue)}

          {renderIcons(totalTrucks - reducedTrucks, Trucks)}
          {renderIcons(reducedTrucks, TrucksBlue)}

          {renderIcons(
            totalFreightPlanes - reducedFreightPlanes,
            freightPlanes,
          )}
          {renderIcons(reducedFreightPlanes, freightPlanesBlue)}

          {renderIcons(
            totalTrashIndustry - reducedTrashIndustry,
            trashIndustry,
          )}
          {renderIcons(reducedTrashIndustry, trashIndustryBlue)}
        </div>

        <p>Households</p>
        <div>
          {renderIcons(
            totalBuildingResidential - reducedBuildingResidential,
            buildingResidentialIcon,
          )}
          {renderIcons(reducedBuildingResidential, buildingResidentialIconBlue)}

          {renderIcons(
            totalPassengerPlanes - reducedPassengerPlanes,
            passengerPlaneIcon,
          )}
          {renderIcons(reducedPassengerPlanes, passengerPlaneIconBlue)}

          {renderIcons(
            totalTrashHouseholds - reducedTrashHouseholds,
            trashHouseholdsIcon,
          )}
          {renderIcons(reducedTrashHouseholds, trashHouseholdsIconBlue)}
        </div>
        <div>
          {renderIcons(totalCars - reducedCars, carIcon)}
          {renderIcons(reducedCars, carIconBlue)}
        </div>
        <div>
          <div className="left-column">
            <p>Agriculture</p>
          </div>
          <div className="right-column">
            <p>Electricity</p>
          </div>
        </div>
        <div>
          <div className="left-column">
            {renderIcons(totalCowMeat - reducedCowMeat, cowMeatIcon)}
            {renderIcons(reducedCowMeat, cowMeatIconBlue)}
            {renderIcons(totalCowMilk - reducedCowMilk, cowMilkIcon)}
            {renderIcons(reducedCowMilk, cowMilkIconBlue)}
            {renderIcons(totalOtherMeat - reducedOtherMeat, otherMeatIcon)}
            {renderIcons(reducedOtherMeat, otherMeatIconBlue)}
            {renderIcons(totalPlants - reducedPlants, plantsIcon)}
            {renderIcons(reducedPlants, plantsIconBlue)}
          </div>
          <div className="right-column">
            {renderIcons(
              totalElectricity - reducedElectricity,
              electricityIcon,
            )}
            {renderIcons(reducedElectricity, electricityIconBlue)}
              <CircleShapedEmissionPoints
            data={{ type: "inland", total_number: 47 }}
          />
          </div>
        </div>
      </DashboardGridDiv>
      <StyledH2>Imports</StyledH2>
      <Import>
        {renderIcons(totalImports - reducedImports, importsIcon)}
        {renderIcons(reducedImports, importsIconBlue)}
        <CircleShapedEmissionPoints
          data={{ type: "imported", total_number: 71 }}
        />
      </Import>

      <StyledH2>Removal</StyledH2>
      <Removal>
        <div className="left-column">
          {renderIcons(totalRemoval + additionalRemoval, removalIcon)}
          <CircleShapedEmissionPoints
            data={{ type: "removed", total_number: -2 }}
          />
        </div>
      </Removal>
    </>
  );
}
