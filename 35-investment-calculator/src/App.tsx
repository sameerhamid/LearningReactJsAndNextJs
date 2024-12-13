import Header from "@root/components/Header";
import ResultsTable, { ResultsTableType } from "@root/components/ResultsTable";
import UserInput, {
  INITIAL_USER_INPUT,
  UserDataType,
} from "@root/components/UserInput";
import { InputNameEnums } from "@root/constants/enums";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState<UserDataType>();
  // const formatter = new Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: "USD",
  //   minimumFractionDigits: 2,
  //   maximumFractionDigits: 2,
  // });

  const calculateHandler = (userInput: UserDataType) => {
    setUserInput(userInput);
  };

  const yearlyData: ResultsTableType[] = []; // per-year results

  if (userInput) {
    let currentSavings = userInput[InputNameEnums.CURRENT_SAVINGS];
    const yearlyContribution = userInput[InputNameEnums.YEARLY_CONTRIBUTION];
    const expectedReturn = userInput[InputNameEnums.EXPECTED_RETURN] / 100;
    const duration = userInput[InputNameEnums.DURATION];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      {!userInput && (
        <h2 style={{ textAlign: "center" }}>No investment calculated yet</h2>
      )}
      {userInput && <ResultsTable results={yearlyData} />}
    </div>
  );
}

export default App;
