import React from "react";
import classes from "./styles.module.css";
interface CustomButtonPropTypes {
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CustomButton: React.FC<CustomButtonPropTypes> = (props) => {
  const { className, type = "button", children, onClick } = props;
  const classNames = `${classes.button} ${className ? className : ""}`;

  return (
    <button className={classNames} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
