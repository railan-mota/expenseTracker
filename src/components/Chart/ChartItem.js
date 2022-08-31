import React from "react";

import "./ChartItem.css";

const ChartItem = (props) => {
  let barFill = "0%";

  if (props.maxValue > 0) {
    barFill = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-item">
      <div className="chart-bar">
        <div className="chart-bar-fill" style={{ height: barFill }}></div>
      </div>
      <span>{props.label}</span>
    </div>
  );
};

export default ChartItem;
