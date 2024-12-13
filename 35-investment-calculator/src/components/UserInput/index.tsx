import React, { useState } from "react";
import classes from "./styles.module.css";
import { InputNameEnums } from "@root/constants/enums";

const INITIAL_USER_INPUT = {
  [InputNameEnums.CURRENT_SAVINGS]: 10000,
  [InputNameEnums.YEARLY_CONTRIBUTION]: 1200,
  [InputNameEnums.EXPECTED_RETURN]: 7,
  [InputNameEnums.DURATION]: 10,
};

interface UserDataType {
  [InputNameEnums.CURRENT_SAVINGS]: number;
  [InputNameEnums.YEARLY_CONTRIBUTION]: number;
  [InputNameEnums.EXPECTED_RETURN]: number;
  [InputNameEnums.DURATION]: number;
}

const UserInput: React.FC = () => {
  const [userData, setUserData] = useState<UserDataType>(INITIAL_USER_INPUT);
  const calculateHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const resetHandler = () => {
    setUserData(INITIAL_USER_INPUT);
  };

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    inputName: InputNameEnums
  ) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [inputName]: +event.target.value,
      };
    });
  };

  return (
    <form className={classes.form} onSubmit={calculateHandler}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor={InputNameEnums.CURRENT_SAVINGS}>
            Current Savings ($)
          </label>
          <input
            value={userData[InputNameEnums.CURRENT_SAVINGS]}
            type="number"
            id={InputNameEnums.CURRENT_SAVINGS}
            onChange={(e) =>
              inputChangeHandler(e, InputNameEnums.CURRENT_SAVINGS)
            }
          />
        </p>
        <p>
          <label htmlFor={InputNameEnums.YEARLY_CONTRIBUTION}>
            Yearly Savings ($)
          </label>
          <input
            value={userData[InputNameEnums.YEARLY_CONTRIBUTION]}
            type="number"
            id={InputNameEnums.YEARLY_CONTRIBUTION}
            onChange={(e) =>
              inputChangeHandler(e, InputNameEnums.YEARLY_CONTRIBUTION)
            }
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor={InputNameEnums.EXPECTED_RETURN}>
            Expected Interest (%, per year)
          </label>
          <input
            value={userData[InputNameEnums.EXPECTED_RETURN]}
            type="number"
            id={InputNameEnums.EXPECTED_RETURN}
            onChange={(e) =>
              inputChangeHandler(e, InputNameEnums.EXPECTED_RETURN)
            }
          />
        </p>
        <p>
          <label htmlFor={InputNameEnums.DURATION}>
            Investment Duration (years)
          </label>
          <input
            value={userData[InputNameEnums.DURATION]}
            type="number"
            id={InputNameEnums.DURATION}
            onChange={(e) => inputChangeHandler(e, InputNameEnums.DURATION)}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
