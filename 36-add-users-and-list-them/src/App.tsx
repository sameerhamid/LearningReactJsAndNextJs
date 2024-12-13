import AddUser from "@root/components/Users/AddUser";
import UserList, { UserDataType } from "@root/components/Users/UserList";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState<UserDataType[]>([]);
  const addUserHandler = (user: UserDataType) => {
    setUserList((prevUsers) => {
      return [...prevUsers, user];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {userList.length > 0 && <UserList users={userList} />}
    </div>
  );
}

export default App;
