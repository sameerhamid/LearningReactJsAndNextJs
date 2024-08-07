import { Component } from "react";
import classes from "./User.module.css";

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

class User extends Component {
  componentWillUnmount() {
    console.log("User will unmount");
  }

  componentDidMount() {
    console.log("User will mount");
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
