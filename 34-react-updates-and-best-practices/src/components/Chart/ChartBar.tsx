import React from "react";
import classes from "./ChartBar.module.css";

interface ChartBarPropTypes {
  value: number;
  label: string;
  maxValue: number;
}
const ChartBar: React.FC<ChartBarPropTypes> = (props) => {
  const { value, label, maxValue } = props;
  let barFillHeight = "0%";
  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className={classes["chart-bar"]}>
      <div className={classes["chart-bar__inner"]}>
        <div
          className={classes["chart-bar__fill"]}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={classes["chart-bar__label"]}>{label.slice(0, 3)}</div>
    </div>
  );
};

export default ChartBar;
