import React from "react";
import classes from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";
export interface ExpenseItemType {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

interface ExpenseItemPropsType {
  expenseItem: ExpenseItemType;
}
const ExpenseItem: React.FC<ExpenseItemPropsType> = (props) => {
  const { title, amount, date } = props.expenseItem;

  return (
    <div className={classes["expense-item"]}>
      <ExpenseDate date={date} />
      <div className={classes["expense-item__description"]}>
        <h2>{title}</h2>
        <div className={classes["expense-item__price"]}>${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
