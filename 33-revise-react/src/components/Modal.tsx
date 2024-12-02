import React from "react";
import classes from "./Model.module.css";
interface ModalPropsType {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalPropsType> = (props) => {
  const { children, onClose } = props;
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog className={classes.modal} open>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
