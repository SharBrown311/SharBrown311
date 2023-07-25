import React, {useState} from "react";
import ModalForm from "./ModalForm";
import Modal from "./Modal";


const Modal1 = ({children, show, setShow}) => {
  const [toggle, setToggle] = useState(false)
  const content = show && (
    <div className="overlay" style={{zIndex: '10001'}}>
        <div className="modal">
        <button
          className="modal-close"
          type="button"
          onClick={() => setShow(false)}
        >
          X
        </button>
          <Modal />
        </div>
    </div>
  )
  return content
}
export default Modal1