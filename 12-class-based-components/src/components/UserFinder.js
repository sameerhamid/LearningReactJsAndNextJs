import { Fragment, useState, useEffect, Component } from "react";

import Users from "./Users";
import classes from "./UserFinder.module.css";
import UsersContext from "../store/user-context";
import ErrorBoundry from "./ErrorBoundry";

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

class UserFinder extends Component {
  static contextType = UsersContext;
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  // use when fetching users from api
  componentDidMount() {
    // Send your http request
    setTimeout(() => {
      //   this.setState({ filteredUsers: DUMMY_USERS });

      // using context
      this.setState({ filteredUsers: this.context.users });
    }, 1000);
  }
  componentDidUpdate(prevProp, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        // filteredUsers: DUMMY_USERS.filter((user) =>
        //   user.name
        //     .toLowerCase()
        //     .includes(this.state.searchTerm.toLocaleLowerCase())
        // ),
        // for context
        filteredUsers: this.context.users.filter((user) =>
          user.name
            .toLowerCase()
            .includes(this.state.searchTerm.toLocaleLowerCase())
        ),
      });
    }
  }

  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundry>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundry>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) =>
//         user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
//       )
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
