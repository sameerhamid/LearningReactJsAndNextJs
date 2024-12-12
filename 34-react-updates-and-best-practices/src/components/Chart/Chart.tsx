import React from "react";
import ChartBar from "./ChartBar";
import classes from "./Chart.module.css";

export interface ChartDataPointType {
  label:
    | "January"
    | "February"
    | "March"
    | "April"
    | "May"
    | "June"
    | "July"
    | "August"
    | "September"
    | "October"
    | "November"
    | "December";
  value: number;
}

interface ChartPropTypes {
  dataPoints: ChartDataPointType[];
}

const Chart: React.FC<ChartPropTypes> = (props) => {
  const { dataPoints } = props;
  const totalMax = Math.max(...dataPoints.map((dataPoint) => dataPoint.value));
  return (
    <div className={classes["chart"]}>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
        />
      ))}
    </div>
  );
};

export default Chart;
