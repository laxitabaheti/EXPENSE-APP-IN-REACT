import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsValue = props.dataPoints.map((datapoint) => datapoint.value);
  const totalMaimum = Math.max(...dataPointsValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          key={dataPoint.label}
          maxValue={totalMaimum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
