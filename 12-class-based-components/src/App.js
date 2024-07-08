import { Component } from "react";
import Users from "./components/Users";
import UserFinder from "./components/UserFinder";

// function App() {
//   return (
//     <div>
//       <Users />
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div>
        {/* <Users /> */}
        <UserFinder />
      </div>
    );
  }
}

export default App;
