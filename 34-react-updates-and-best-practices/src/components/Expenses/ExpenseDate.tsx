import React from "react";
import classes from "./ExpenseDate.module.css";
interface ExpenseDataPropsType {
  date: Date;
}
const ExpenseDate: React.FC<ExpenseDataPropsType> = (props) => {
  const { date } = props;
  const month = date.toLocaleString("en-US", {
    month: "long",
  });
  const year = date.getFullYear();
  const day = date.toLocaleString("en-US", {
    day: "numeric",
  });
  return (
    <div className={classes["expense-date"]}>
      <div className={classes["expense-date__month"]}>{month}</div>
      <div className={classes["expense-date__year"]}>{year}</div>
      <div className={classes["expense-date__day"]}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
