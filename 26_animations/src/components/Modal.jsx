import { createPortal } from 'react-dom';
import { motion } from 'framer-motion'
export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog open className="modal"
        initial={{ opacity: 0, y: 30 }} // it allows us to set the starting state of this element
        animate={{ opacity: 1, y: 0 }}>
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
