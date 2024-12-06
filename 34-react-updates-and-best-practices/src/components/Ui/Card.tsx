import React, { StyleHTMLAttributes } from "react";
import classes from "./Card.module.css";
interface CardPropTypes {
  children: React.ReactNode;
  className?: StyleHTMLAttributes<HTMLDivElement>["className"];
}

const Card: React.FC<CardPropTypes> = ({ children, className: styles }) => {
  const cardClassed = `${classes.card} ${styles ? styles : ""}`;
  return <div className={cardClassed}>{children}</div>;
};

export default Card;
