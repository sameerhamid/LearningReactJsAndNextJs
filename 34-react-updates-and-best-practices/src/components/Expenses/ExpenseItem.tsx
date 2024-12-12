import React from "react";
import classes from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Ui/Card";
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
    <li>
      <Card className={classes["expense-item"]}>
        <ExpenseDate date={date} />
        <div className={classes["expense-item__description"]}>
          <h2>{title}</h2>
          <div className={classes["expense-item__price"]}>${amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
