import React from "react";
import classes from "./styles.module.css";

export interface ResultsTableType {
  year: number;
  yearlyInterest: number;
  savingsEndOfYear: number;
  yearlyContribution: number;
}

interface ResultsTablePropType {
  results: ResultsTableType[];
}
const ResultsTable: React.FC<ResultsTablePropType> = (props) => {
  const { results } = props;
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{result.savingsEndOfYear.toFixed(2)}</td>
            <td>{result.yearlyInterest.toFixed(2)}</td>
            <td>
              {(result.savingsEndOfYear - result.yearlyInterest).toFixed(2)}
            </td>
            <td>{result.yearlyContribution.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
