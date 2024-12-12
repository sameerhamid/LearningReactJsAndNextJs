import React from "react";
import classes from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";
import { ExpenseItemType } from "../Expenses/ExpenseItem";

interface NewExpensePropsType {
  onAddExpense: (expenseData: ExpenseItemType) => void;
}

const NewExpense: React.FC<NewExpensePropsType> = (props) => {
  const { onAddExpense } = props;
  const saveExpenseDataHandler = (expenseData: ExpenseItemType) => {
    onAddExpense(expenseData);
  };
  return (
    <div className={classes["new-expense"]}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
