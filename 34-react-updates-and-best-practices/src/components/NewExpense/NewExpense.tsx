import React from "react";
import classes from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = () => {
  return (
    <div className={classes["new-expense"]}>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
