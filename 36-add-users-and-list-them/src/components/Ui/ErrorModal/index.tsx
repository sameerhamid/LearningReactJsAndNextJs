import React from "react";
import classes from "./styles.module.css";
import Card from "@root/components/Ui/Card";
import CustomButton from "@root/components/Ui/CustomButton";

interface ErrorModalPropTypes {
  title: string;
  message: string;
  onConfirm: () => void;
}

const ErrorModal: React.FC<ErrorModalPropTypes> = (props) => {
  const { title, message, onConfirm } = props;

  return (
    <div>
      <div className={classes.backdrop} onClick={onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <CustomButton onClick={onConfirm}>Okay</CustomButton>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
