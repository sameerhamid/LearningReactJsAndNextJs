import React from "react";
import classes from "./styles.module.css";
import logo from "../../assets/investment-calculator-logo.png";
const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
