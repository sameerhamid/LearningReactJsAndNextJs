import React from "react";
import ExpenseItem, { ExpenseItemType } from "./ExpenseItem";
import classes from "./Expenses.module.css";
import Card from "../Ui/Card";
import ExpensesFilter, { YEAR_FILTERS } from "../NewExpense/ExpenseFilter";

interface ExpensesPropsType {
  expenses: ExpenseItemType[];
}
const Expenses: React.FC<ExpensesPropsType> = (props) => {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = React.useState("2024");
  const filteredYears = YEAR_FILTERS.filter((year) => year !== filteredYear);
  const filteredInfoText =
    filteredYears.slice(0, -1).join(", ") + " & " + filteredYears.slice(-1);

  const handleFilterChange = (year: string) => {
    setFilteredYear(year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className={classes["expenses"]}>
        <ExpensesFilter
          onChangeFilter={handleFilterChange}
          selectedFilter={filteredYear}
        />
        <p>{filteredInfoText} is hidden</p>
        {filteredExpenses.length === 0 ? (
          <p>No expenses found for the selected year</p>
        ) : (
          filteredExpenses.map((expense) => {
            return <ExpenseItem expenseItem={expense} key={expense.id} />;
          })
        )}
      </Card>
    </div>
  );
};

export default Expenses;
