import React, { useState } from "react";

function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  const handleResetValue = () => {
    setEnteredValue(defaultValue);
    setDidEdit(false);
  };

  const handleChange = (event) => {
    setEnteredValue(event.target.value);

    setDidEdit(false);
  };
  const handleInputBlur = () => {
    setDidEdit(true);
  };

  return {
    value: enteredValue,
    handleChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
    handleResetValue,
  };
}

export default useInput;
