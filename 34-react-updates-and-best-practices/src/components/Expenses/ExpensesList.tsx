import React from "react";
import classes from "./ExpensesList.module.css";
import ExpenseItem, { ExpenseItemType } from "./ExpenseItem";

interface ExpensesListPropTypes {
  expenses: ExpenseItemType[];
}
const ExpensesList: React.FC<ExpensesListPropTypes> = (props) => {
  const { expenses } = props;

  if (expenses.length === 0) {
    return (
      <h2 className={classes["expenses-list__fallback"]}>
        No expenses found for the selected year
      </h2>
    );
  }
  return (
    <ul className={classes["expenses-list"]}>
      {expenses.map((expense) => {
        return <ExpenseItem expenseItem={expense} key={expense.id} />;
      })}
    </ul>
  );
};

export default ExpensesList;
