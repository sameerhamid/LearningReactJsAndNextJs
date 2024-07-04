import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children }) {
  const dialogRef = useRef()

  // it will give error Cannot read properties of undefined (reading 'close') because the ref has not set yet to dialog so we use useEffect
  // if (open) {
  //   dialogRef.current.showModal()
  // } else {
  //   dialogRef.current.close()
  // }

  useEffect(() => {
    if (open) {
      dialogRef.current.showModal()
    } else {
      dialogRef.current.close()
    }
  }, [open])

  return createPortal(
    <dialog className="modal" ref={dialogRef}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
