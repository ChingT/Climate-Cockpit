// Import the styled component
import SolutionDropDown from "./SolutionDropDown.jsx";
import { SolutionListDiv } from "./solution.style.js";

let solutions = [
  {
    category: "Transport",
    name: "Electric Cars",
    impact: -5,
    description:
      "If everybody in Switzerland who owns a car, drove an electric car, annual emissions would be 5 megatons lower.",
    progress: 12,
    progress_description: "of all cars in Switzerland are electric.",
    number_of_supporters: 2301,
    button_text: "Yes, I have an electric car",
  },
  {
    category: "Electricity",
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
    category: "Trash",
    name: "Recycling Programs",
    impact: -2,
    description:
      "Implementing comprehensive recycling could reduce waste and emissions associated with landfills.",
    progress: 35,
    progress_description: "of waste in Switzerland is recycled.",
    number_of_supporters: 2905,
    button_text: "I recycle regularly",
  },
  {
    category: "Electricity",
    name: "Energy-Efficient Appliances",
    impact: -2,
    description:
      "Using energy-efficient appliances can lower electricity consumption.",
    progress: 40,
    progress_description: "of households use energy-saving appliances.",
    number_of_supporters: 2100,
    button_text: "I use energy-efficient appliances",
  },
  {
    category: "Buildings",
    name: "Sustainable Insulation",
    impact: -1,
    description: "Better insulation reduces heating and cooling needs.",
    progress: 25,
    progress_description:
      "of new buildings use sustainable insulation materials.",
    number_of_supporters: 1340,
    button_text: "My home is insulated sustainably",
  },
  {
    category: "Trash",
    name: "Low-Flow Showerheads",
    impact: -1,
    description: "Low-flow showerheads can significantly cut down water usage.",
    progress: 50,
    progress_description: "of households have installed low-flow showerheads.",
    number_of_supporters: 2890,
    button_text: "I use a low-flow showerhead",
  },
  {
    category: "Nature",
    name: "Tree Planting Initiatives",
    impact: -3,
    description: "Planting trees helps to absorb CO2 and improve air quality.",
    progress: 60,
    progress_description: "increase in forested areas since last decade.",
    number_of_supporters: 3234,
    button_text: "I've planted a tree",
  },
  {
    category: "Trash",
    name: "Community Composting",
    impact: -1,
    description:
      "Composting organic waste reduces landfill use and creates useful products.",
    progress: 18,
    progress_description:
      "reduction in organic waste due to community composting.",
    number_of_supporters: 1987,
    button_text: "I compost at home",
  },
  {
    category: "Transport",
    name: "Expansion of Public Transport",
    impact: -4,
    description:
      "Investing in public transport reduces the number of cars on the road.",
    progress: 25,
    progress_description:
      "expansion of public transport networks in urban areas.",
    number_of_supporters: 3300,
    button_text: "I use public transport",
  },
  {
    category: "Buildings",
    name: "Geothermal Heating",
    impact: -2,
    description:
      "Geothermal energy can provide a sustainable source of heat and power.",
    progress: 12,
    progress_description: "of households use geothermal heating solutions.",
    number_of_supporters: 950,
    button_text: "I use geothermal heating",
  },
  {
    category: "Industry",
    name: "Industrial Emission Controls",
    impact: -6,
    description:
      "Strict controls on industrial emissions can improve air quality.",
    progress: 48,
    progress_description:
      "reduction in harmful industrial emissions over the past five years.",
    number_of_supporters: 3102,
    button_text: "I support emission controls",
  },
  {
    category: "Nature",
    name: "Protecting Natural Habitats",
    impact: -3,
    description:
      "Preserving and expanding natural habitats ensures biodiversity and ecosystem health.",
    progress: 30,
    progress_description: "increase in protected natural areas.",
    number_of_supporters: 1500,
    button_text: "I support habitat protection",
  },
  {
    category: "Innovation",
    name: "Carbon Capture and Storage",
    impact: -4,
    description:
      "Capturing CO2 emissions at their source can prevent them from reaching the atmosphere.",
    progress: 10,
    progress_description:
      "of major CO2 emitters have installed capture technology.",
    number_of_supporters: 900,
    button_text: "I support carbon capture",
  },
  {
    category: "Nature",
    name: "River Cleanup Campaigns",
    impact: -2,
    description:
      "Cleaning up rivers improves water quality for ecosystems and human use.",
    progress: 45,
    progress_description:
      "of polluted rivers have had cleanup efforts in the past year.",
    number_of_supporters: 2200,
    button_text: "I volunteer for river cleanups",
  },
  {
    category: "Food",
    name: "Sustainable Farming Practices",
    impact: -3,
    description:
      "Using less water and pesticides, and more natural farming methods can greatly reduce environmental impact.",
    progress: 28,
    progress_description: "of farms use sustainable practices.",
    number_of_supporters: 1850,
    button_text: "I buy sustainable produce",
  },
  {
    category: "Innovation",
    name: "Sustainability Education in Schools",
    impact: -1,
    description:
      "Educating the next generation on sustainability can lead to long-term environmental benefits.",
    progress: 55,
    progress_description:
      "of schools have included sustainability in their curriculum.",
    number_of_supporters: 2630,
    button_text: "I support sustainability education",
  },
  {
    category: "Money",
    name: "Battery Storage Systems",
    impact: -2,
    description:
      "Large-scale energy storage can help manage the variable supply from renewable sources.",
    progress: 14,
    progress_description:
      "of renewable energy facilities have integrated storage solutions.",
    number_of_supporters: 1120,
    button_text: "I endorse energy storage investments",
  },
  {
    category: "Nature",
    name: "Urban Green Spaces",
    impact: -1,
    description:
      "Increasing urban green spaces can reduce the heat island effect and improve city living.",
    progress: 38,
    progress_description: "of urban areas have designated green spaces.",
    number_of_supporters: 2550,
    button_text: "I enjoy urban green spaces",
  },
  {
    category: "Trash",
    name: "Biodegradable Packaging",
    impact: -2,
    description:
      "Biodegradable packaging reduces landfill waste and environmental toxins from plastics.",
    progress: 20,
    progress_description: "of products use eco-friendly packaging.",
    number_of_supporters: 3000,
    button_text: "I choose products with biodegradable packaging",
  },
  {
    category: "Nature",
    name: "Sustainable Fishing",
    impact: -3,
    description:
      "Regulated fishing with quota systems ensures marine populations are not overexploited.",
    progress: 30,
    progress_description: "compliance with sustainable fishing practices.",
    number_of_supporters: 1200,
    button_text: "I buy only sustainable seafood",
  },
  {
    category: "Food",
    name: "Local Food Consumption",
    impact: -2,
    description:
      "Consuming locally produced food cuts down on transport emissions.",
    progress: 40,
    progress_description:
      "of the food consumed is produced within a 100-mile radius.",
    number_of_supporters: 2770,
    button_text: "I eat locally sourced food",
  },
  {
    category: "Trash",
    name: "Waste-to-Energy Projects",
    impact: -4,
    description:
      "Turning waste into energy reduces landfill use and produces renewable energy.",
    progress: 22,
    progress_description: "of municipal waste is converted to energy.",
    number_of_supporters: 1750,
    button_text: "I support waste-to-energy",
  },
  {
    category: "Import",
    name: "Reducing Plastic Use",
    impact: -2,
    description:
      "Minimizing plastic use can decrease pollution and save energy.",
    progress: 50,
    progress_description:
      "reduction in single-use plastic consumption in the past year.",
    number_of_supporters: 4000,
    button_text: "I reduce my plastic use",
  },
  {
    category: "Transport",
    name: "Incentives for Sustainable Travel",
    impact: -3,
    description:
      "Encouraging the use of bicycles, walking, and public transport reduces emissions.",
    progress: 35,
    progress_description: "increase in use of sustainable travel options.",
    number_of_supporters: 2200,
    button_text: "I travel sustainably",
  },
  {
    category: "Import",
    name: "Eco-labeling and Certification",
    impact: -1,
    description:
      "Products with eco-labels comply with strict environmental standards.",
    progress: 40,
    progress_description:
      "of products on the market have eco-friendly certifications.",
    number_of_supporters: 1800,
    button_text: "I buy certified green products",
  },
  {
    category: "Money",
    name: "Tax Rebates for Renewable Energy",
    impact: -6,
    description:
      "Tax incentives can speed up the adoption of solar and wind energy solutions.",
    progress: 50,
    progress_description:
      "of solar and wind projects benefit from tax rebates.",
    number_of_supporters: 1950,
    button_text: "I invest in renewable energy",
  },
  {
    category: "Buildings",
    name: "Green Roof Installation",
    impact: -1,
    description: "Green roofs on buildings can insulate and manage rainwater.",
    progress: 20,
    progress_description: "of new buildings have green roofs.",
    number_of_supporters: 1150,
    button_text: "My building has a green roof",
  },
  {
    category: "Nature",
    name: "Land and Water Restoration",
    impact: -4,
    description:
      "Restoration projects can repair damage caused by industry and restore ecosystems.",
    progress: 15,
    progress_description: "of damaged ecosystems are under active restoration.",
    number_of_supporters: 1320,
    button_text: "I volunteer in restoration projects",
  },
  {
    category: "Food",
    name: "Grass-fed Meat Production",
    impact: -2,
    description:
      "Supporting grass-fed livestock practices reduces methane emissions and the use of grain feed.",
    progress: 18,
    progress_description: "of meat produced is from sustainable practices.",
    number_of_supporters: 1680,
    button_text: "I eat sustainable meat",
  },
  {
    category: "Food",
    name: "Use of Natural Pesticides",
    impact: -1,
    description:
      "Natural pesticides reduce chemical runoff and help maintain soil health.",
    progress: 25,
    progress_description: "of farms have switched to natural pesticides.",
    number_of_supporters: 1400,
    button_text: "I support natural pesticide use",
  },
  {
    category: "Buildings",
    name: "Free Home Energy Audits",
    impact: -2,
    description:
      "Home energy audits can identify ways to save energy and lower utility bills.",
    progress: 30,
    progress_description: "of homes have completed energy audits.",
    number_of_supporters: 2250,
    button_text: "I've had a home energy audit",
  },
];

function SolutionList() {
  return (
    <SolutionListDiv>
      {solutions.map((solution, index) => (
        <SolutionDropDown key={index} solution={solution} />
      ))}
    </SolutionListDiv>
  );
}

export default SolutionList;
