import React from "react";
import classes from "./styles.module.css";
interface CardPropTypes {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardPropTypes> = (props) => {
  const classNames = `${classes.card} ${
    props.className ? props.className : ""
  }`;
  return <div className={classNames}>{props.children}</div>;
};

export default Card;
