import React from "react";
import ExpenseItem, { ExpenseItemType } from "./ExpenseItem";
import classes from "./Expenses.module.css";

interface ExpensesPropsType {
  expenses: ExpenseItemType[];
}
const Expenses: React.FC<ExpensesPropsType> = (props) => {
  const { expenses } = props;
  return (
    <div className={classes["expenses"]}>
      {expenses.map((expense) => {
        return <ExpenseItem expenseItem={expense} key={expense.id} />;
      })}
    </div>
  );
};

export default Expenses;
