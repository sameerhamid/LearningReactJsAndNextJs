import React from "react";
import classes from "./styles.module.css";
import { formatCurrency } from "@root/utils/CurrencyFormator";

export interface ResultsTableType {
  year: number;
  yearlyInterest: number;
  savingsEndOfYear: number;
  yearlyContribution: number;
}

interface ResultsTablePropType {
  results: ResultsTableType[];
  initialInvestment: number;
}
const ResultsTable: React.FC<ResultsTablePropType> = (props) => {
  const { results, initialInvestment } = props;
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

            <td>{formatCurrency(result.savingsEndOfYear)}</td>
            <td>{result.yearlyInterest.toFixed(2)}</td>
            <td>
              {formatCurrency(
                result.savingsEndOfYear -
                  initialInvestment -
                  result.yearlyInterest * result.year
              )}
            </td>
            <td>
              {formatCurrency(
                initialInvestment + result.yearlyContribution * result.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
