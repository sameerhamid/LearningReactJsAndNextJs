import React from "react";
import ExpenseItem, { ExpenseItemType } from "./ExpenseItem";
import classes from "./Expenses.module.css";
import Card from "../Ui/Card";

interface ExpensesPropsType {
  expenses: ExpenseItemType[];
}
const Expenses: React.FC<ExpensesPropsType> = (props) => {
  const { expenses } = props;
  return (
    <Card className={classes["expenses"]}>
      {expenses.map((expense) => {
        return <ExpenseItem expenseItem={expense} key={expense.id} />;
      })}
    </Card>
  );
};

export default Expenses;
