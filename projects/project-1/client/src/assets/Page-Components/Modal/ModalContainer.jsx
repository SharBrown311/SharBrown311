import React, {useState} from "react";
import ModalForm from "./ModalForm";
import './Modal.css'


const ModalContainer = ({children, show, setShow}) => {
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
          <ModalForm />
        </div>
    </div>
  )
  return content
}
export default ModalContainer