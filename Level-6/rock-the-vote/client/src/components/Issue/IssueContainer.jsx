import React, {useContext, useState} from "react"
import { UserContext } from "../../context/UserProvider"
import Dropdown from "react-bootstrap/Dropdown"
import Modal from "react-bootstrap/Modal"

export default function IssueContainer(props){
  const {title, description, imgUrl, _id} = props
  console.log(props)


  const {
    token, 
    editIssue, 
    deleteIssue,
    user: {username},
  } = useContext(UserContext)
  const [isEditing, setIsEditing] = useState(false)
  const [issue, setIssue] = useState({
    title, 
    description, 
    imgUrl
  })
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)

  const handleClose = () => {
    setShow(false)
    setIsEditing(!isEditing)
  }
  function handleEdit(){
    setIsEditing(!isEditing)
    handleShow()
  }
  function handleDelete(){
    deleteIssue(_id)
  }
  function handleSave(){
    editIssue(_id, issue)
    setIsEditing(false)
    handleClose()
  }
  return(
    <div className="issue-container">
      <div className="issue-wrapper">
        <img src = {imgUrl} alt = {title} />    
      <h4 className="issue-title">
            {title}
          </h4>
          <p className="issue-description"> {description}</p>
          <div className="button-container">
            <button onClick={handleEdit}>Edit Issue</button>
            <button onClick={handleDelete}>Delete Issue</button>
          </div>
      </div>
      <Modal show = {show}
      onHide={handleClose}
      backdrop = "static"
      keyboard = {false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Issue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input className="input-title-popup"
          value = {issue.title}
          onChange = {(e) => setIssue({...issue, title: e.target.value})} 
          placeholder="Title"
          />
          <input className="input-description-popup"
          value={issue.description}
          onChange={(e) => setIssue({...issue, description: e.target.value})} 
          placeholder="Description"
          />
          <input className="input-imgUrl-popup"
          value={issue.imgUrl}
          onChange={(e) => setIssue({...issue, imgUrl: e.target.value})} 
          placeholder="Image Url"
          />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>Close</button>
          <button onClick={handleSave}>Save</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
