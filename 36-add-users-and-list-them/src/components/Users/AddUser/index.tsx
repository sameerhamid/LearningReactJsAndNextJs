import React, { useState } from "react";
import classes from "./styles.module.css";
import { UserFormFields } from "@root/constants/Enums";
import Card from "@root/components/Ui/Card";
import CustomButton from "@root/components/Ui/CustomButton";

interface UserFormDataType {
  [UserFormFields.USER_NAME]: string;
  [UserFormFields.AGE]: string;
}

const AddUser: React.FC = () => {
  const [enteredUserData, setEnteredUserData] = useState<UserFormDataType>({
    [UserFormFields.USER_NAME]: "",
    [UserFormFields.AGE]: "",
  });

  const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      enteredUserData[UserFormFields.USER_NAME].trim().length === 0 ||
      enteredUserData[UserFormFields.AGE].trim().length === 0
    ) {
      return;
    }

    if (+enteredUserData[UserFormFields.AGE] < 1) {
      return;
    }
    console.log(enteredUserData);

    setEnteredUserData({
      [UserFormFields.USER_NAME]: "",
      [UserFormFields.AGE]: "",
    });
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredUserData((prevState) => {
      return {
        ...prevState,
        [event.target.id]: event.target.value,
      };
    });
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor={UserFormFields.USER_NAME}>Username</label>
        <input
          value={enteredUserData[UserFormFields.USER_NAME]}
          type="text"
          id={UserFormFields.USER_NAME}
          onChange={inputChangeHandler}
        />
        <label htmlFor={UserFormFields.AGE}>Age (Years)</label>
        <input
          value={enteredUserData[UserFormFields.AGE]}
          type="number"
          id={UserFormFields.AGE}
          onChange={inputChangeHandler}
        />
        <CustomButton type="submit">Add User</CustomButton>
      </form>
    </Card>
  );
};

export default AddUser;
