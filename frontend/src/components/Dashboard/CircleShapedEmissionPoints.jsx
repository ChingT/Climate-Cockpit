import { CircleShapedPoints } from "./dashboard.style.js";

export default function CircleShapedEmissionPoints({ data }) {
  const { type, total_number } = data;
  return (
    <CircleShapedPoints type={type}>
      <h2>{total_number}</h2>
    </CircleShapedPoints>
  );
}
