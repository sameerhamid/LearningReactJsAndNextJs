import React from "react";
import classes from "./ExpenseForm.module.css";
import { FormInput } from "../../utils/enums";
import { ExpenseItemType } from "../Expenses/ExpenseItem";

interface ExpenseFormPropsType {
  onSaveExpenseData: (expenseData: ExpenseItemType) => void;
}
const ExpenseForm: React.FC<ExpenseFormPropsType> = (props) => {
  const { onSaveExpenseData } = props;
  const [inputData, setInputData] = React.useState({
    [FormInput.TITLE]: "",
    [FormInput.AMOUNT]: 0,
    [FormInput.DATE]: "",
  });

  const inputChangeHandler = (value: string, inputId: FormInput) => {
    setInputData((prevState) => {
      return {
        ...prevState,
        [inputId]: value,
      };
    });
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      inputData[FormInput.TITLE].trim().length === 0 ||
      inputData[FormInput.AMOUNT] === 0 ||
      inputData[FormInput.DATE].trim().length === 0
    ) {
      return;
    }
    const expenseData: ExpenseItemType = {
      title: inputData[FormInput.TITLE],
      amount: inputData[FormInput.AMOUNT],
      date: new Date(inputData[FormInput.DATE]),
      id: Date.now().toString(),
    };
    onSaveExpenseData(expenseData);
    setInputData({
      [FormInput.TITLE]: "",
      [FormInput.AMOUNT]: 0,
      [FormInput.DATE]: "",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={classes["new-expense__controls"]}>
        <div className={classes["new-expense__control"]}>
          <label htmlFor={FormInput.TITLE}>Title</label>
          <input
            value={inputData[FormInput.TITLE]}
            type="text"
            id={FormInput.TITLE}
            onChange={(event) =>
              inputChangeHandler(event.target.value, FormInput.TITLE)
            }
          />
        </div>
        <div className={classes["new-expense__control"]}>
          <label htmlFor={FormInput.AMOUNT}>Amount</label>
          <input
            value={inputData[FormInput.AMOUNT]}
            type="number"
            id={FormInput.AMOUNT}
            min={0.01}
            step={0.01}
            onChange={(event) =>
              inputChangeHandler(event.target.value, FormInput.AMOUNT)
            }
          />
        </div>
        <div className={classes["new-expense__control"]}>
          <label htmlFor={FormInput.DATE}>Date</label>
          <input
            value={inputData[FormInput.DATE]}
            type="date"
            id={FormInput.DATE}
            min={"2022-01-01"}
            max={"2024-12-31"}
            onChange={(event) =>
              inputChangeHandler(event.target.value, FormInput.DATE)
            }
          />
        </div>
      </div>
      <div className={classes["new-expense__actions"]}>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
