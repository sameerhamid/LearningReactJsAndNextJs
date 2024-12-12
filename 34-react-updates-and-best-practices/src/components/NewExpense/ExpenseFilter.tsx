import React from "react";

import classes from "./ExpenseFilter.module.css";

export const YEAR_FILTERS = ["2024", "2023", "2022", "2021"];
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
          {YEAR_FILTERS.map((year) => {
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
