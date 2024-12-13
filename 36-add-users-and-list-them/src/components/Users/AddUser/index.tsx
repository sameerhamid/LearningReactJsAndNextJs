import React from "react";
import classes from "./styles.module.css";
import { UserFormFields } from "@root/constants/Enums";
import Card from "@root/components/Ui/Card";
import CustomButton from "@root/components/Ui/CustomButton";

const AddUser: React.FC = () => {
  const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor={UserFormFields.USER_NAME}>Username</label>
        <input type="text" id={UserFormFields.USER_NAME} />
        <label htmlFor={UserFormFields.AGE}>Age (Years)</label>
        <input type="number" id={UserFormFields.AGE} />
        <CustomButton type="submit">Add User</CustomButton>
      </form>
    </Card>
  );
};

export default AddUser;
