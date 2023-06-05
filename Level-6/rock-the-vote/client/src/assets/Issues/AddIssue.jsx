import React, {useState, useContext} from 'react'
import IssueForm from './IssueForm'
import Modal from "react-bootstrap/Modal";
import { IssueContext } from '../Context/IssueProvider'
import "./issue.css"




function AddIssue(props) {
  const initInputs = {
    title: "", 
    description: "",
     imgUrl: ""}
  const {toggler, show} = props
  const [inputs, setInputs] = useState(initInputs)
  const {addIssue} = useContext(IssueContext)

 

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prev => ({...prev, [name]: value}));
  }

  function handleSubmit(e){
    e.preventDefault()
    addIssue(inputs)
    setInputs(initInputs)
    toggler()
  }


  return (
    <div
      className={show ? "modal-overlay modal-overlay-open" : "modal-overlay"}
    >
      <div className="modal">
        <IssueForm
          inputs={inputs}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          btnText="Add Issue"
        />
        <button className="modal-btn" onClick={toggler}>
          X
        </button>
      </div>
    </div>
  )
}

export default AddIssue