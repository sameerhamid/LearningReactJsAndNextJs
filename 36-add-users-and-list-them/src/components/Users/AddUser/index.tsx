import React, { useState } from "react";
import classes from "./styles.module.css";
import { UserFormFields } from "@root/constants/Enums";
import Card from "@root/components/Ui/Card";
import CustomButton from "@root/components/Ui/CustomButton";
import { UserDataType } from "../UserList";
import ErrorModal from "@root/components/Ui/ErrorModal";

interface ErrorTypes {
  title: string;
  message: string;
}
interface AddUserPropTypes {
  onAddUser: (user: UserDataType) => void;
}
const AddUser: React.FC<AddUserPropTypes> = ({ onAddUser }) => {
  const [enteredUserData, setEnteredUserData] = useState<UserDataType>({
    [UserFormFields.USER_NAME]: "",
    [UserFormFields.AGE]: "",
  });

  const [error, setError] = useState<ErrorTypes | null>(null);

  const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      enteredUserData[UserFormFields.USER_NAME].trim().length === 0 ||
      enteredUserData[UserFormFields.AGE].trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age ( non-empty values ).",
      });
      return;
    }

    if (+enteredUserData[UserFormFields.AGE] < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age ( > 0 ).",
      });
      return;
    }
    onAddUser(enteredUserData);

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
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={() => setError(null)}
        />
      )}
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
    </div>
  );
};

export default AddUser;
