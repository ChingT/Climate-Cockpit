import React from "react";
import "./ProgressBar.css";

function ProgressBar({ percentage }) {
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      <p>{percentage}% of energy consumed in Switzerland is clean.</p>
    </div>
  );
}

export default ProgressBar;
