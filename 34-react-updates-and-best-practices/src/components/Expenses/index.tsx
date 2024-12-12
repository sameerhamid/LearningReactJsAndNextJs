import React from "react";
import ExpenseItem, { ExpenseItemType } from "./ExpenseItem";
import classes from "./Expenses.module.css";
import Card from "../Ui/Card";
import ExpensesFilter from "../NewExpense/ExpenseFilter";

interface ExpensesPropsType {
  expenses: ExpenseItemType[];
}
const Expenses: React.FC<ExpensesPropsType> = (props) => {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = React.useState("2024");

  const handleFilterChange = (year: string) => {
    setFilteredYear(year);
  };

  return (
    <div>
      <Card className={classes["expenses"]}>
        <ExpensesFilter
          onChangeFilter={handleFilterChange}
          selectedFilter={filteredYear}
        />
        {expenses.map((expense) => {
          return <ExpenseItem expenseItem={expense} key={expense.id} />;
        })}
      </Card>
    </div>
  );
};

export default Expenses;
