import React, { useState } from "react";
import { ExpenseItemType } from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const [expenses, setExpenses] = useState<ExpenseItemType[]>([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "Let's get started"),
    React.createElement(Expenses, { expenses: expenses })
  );
  // return (
  //   <div>
  //     <div>Let's get started</div>
  //     <Expenses expenses={expenses} />
  //   </div>
  // );
}

export default App;
