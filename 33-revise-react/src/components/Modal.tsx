import React from "react";
import classes from "./Model.module.css";
interface ModalPropsType {
  children: React.ReactNode;
}

const Modal: React.FC<ModalPropsType> = (props) => {
  const { children } = props;
  return (
    <>
      <div className={classes.backdrop} />
      <dialog className={classes.modal} open>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
