import { CircleShapedPoints } from "./dashboard.style.js";

export default function CircleShapedEmissionPoints({ data }) {
  const { type, total_number } = data;
  return (
    <CircleShapedPoints $type={type}>
      <h3>{total_number}</h3>
    </CircleShapedPoints>
  );
}
