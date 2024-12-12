import React from "react";
import Chart, { ChartDataPointType } from "../Chart/Chart";
import { ExpenseItemType } from "./ExpenseItem";

interface ExpensesChartProps {
  expenses: ExpenseItemType[];
}
const ExpensesChart: React.FC<ExpensesChartProps> = (props) => {
  const { expenses } = props;
  const chartDataPoints: ChartDataPointType[] = [
    {
      label: "January",
      value: 0,
    },
    {
      label: "February",
      value: 0,
    },
    {
      label: "March",
      value: 0,
    },
    {
      label: "April",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "June",
      value: 0,
    },
    {
      label: "July",
      value: 0,
    },
    {
      label: "August",
      value: 0,
    },
    {
      label: "September",
      value: 0,
    },
    {
      label: "October",
      value: 0,
    },
    {
      label: "November",
      value: 0,
    },
    {
      label: "December",
      value: 0,
    },
  ];
  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
