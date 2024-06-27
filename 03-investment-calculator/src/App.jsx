import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";

function App() {



  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  /**
   * 
   * @param {*} inputIdentifier : identifier which input field shold update
   * @param {*} newValue : value on Onchange 
   */
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, // plus is for to change from string to number
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      <Results inputs={userInput} />
    </>
  )
}

export default App
