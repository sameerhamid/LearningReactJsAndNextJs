import React from "react";

import classes from "./ExpenseFilter.module.css";

interface ExpensesPropsType {
  onChangeFilter: (year: string) => void;
  selectedFilter: string;
}
const ExpensesFilter: React.FC<ExpensesPropsType> = (props) => {
  const { onChangeFilter, selectedFilter } = props;
  const filterChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeFilter(event.target.value);
  };
  return (
    <div className={classes["expenses-filter"]}>
      <div className={classes["expenses-filter__control"]}>
        <label>Filter by year</label>
        <select onChange={filterChangeHandler} value={selectedFilter}>
          <option value="2022">2024</option>
          <option value="2021">2023</option>
          <option value="2020">2022</option>
          <option value="2019">2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
