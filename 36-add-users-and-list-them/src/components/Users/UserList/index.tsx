import Card from "@root/components/Ui/Card";
import { UserFormFields } from "@root/constants/Enums";
import classes from "./styles.module.css";
import React from "react";

export interface UserDataType {
  [UserFormFields.USER_NAME]: string;
  [UserFormFields.AGE]: string;
  id?: string;
}

interface UserListPropTypes {
  users: UserDataType[];
}

const UserList: React.FC<UserListPropTypes> = (props) => {
  const { users } = props;
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => {
          return (
            <li>
              {user[UserFormFields.USER_NAME]} ({user[UserFormFields.AGE]} years
              old){" "}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
