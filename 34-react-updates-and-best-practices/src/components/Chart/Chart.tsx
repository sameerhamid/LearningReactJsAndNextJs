import React from "react";
import ChartBar from "./ChartBar";
import classes from "./Chart.module.css";

export interface DataPointType {
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
  dataPoints: DataPointType[];
}

const Chart: React.FC<ChartPropTypes> = (props) => {
  const { dataPoints } = props;
  return (
    <div className={classes["chart"]}>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={0}
        />
      ))}
    </div>
  );
};

export default Chart;
