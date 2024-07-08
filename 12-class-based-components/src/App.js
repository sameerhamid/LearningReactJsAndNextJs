import { Component } from "react";
import Users from "./components/Users";
import UserFinder from "./components/UserFinder";
import UsersContext from "./store/user-context";

// function App() {
//   return (
//     <div>
//       <Users />
//     </div>
//   );
// }

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Maximum" },
  { id: "u4", name: "Abc" },
  { id: "u5", name: "Def" },
  { id: "u6", name: "abf" },
  { id: "u7", name: "abe" },
  { id: "u8", name: "deh" },
];

class App extends Component {
  render() {
    const usersContext = {
      users: DUMMY_USERS,
    };
    return (
      <UsersContext.Provider value={usersContext}>
        <UserFinder />
      </UsersContext.Provider>
    );
  }
}

export default App;
