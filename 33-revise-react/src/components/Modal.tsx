import React from "react";
import classes from "./Model.module.css";
import { useNavigate } from "react-router-dom";
import Routes from "../utils/routes";
interface ModalPropsType {
  children: React.ReactNode;
}

const Modal: React.FC<ModalPropsType> = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const closeHandler = () => {
    navigate(Routes.Home);
  };
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog className={classes.modal} open>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
