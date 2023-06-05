import React, { useContext, useState } from 'react';
import {Modal} from "react-bootstrap"
import moment from 'moment';
import './issue.css';
import { IssueContext } from '../Context/IssueProvider';
import { UserContext } from '../Context/UserProvider';
// import EditIssue from "./EditIssue"

export default function Issue(props) {
  const {
    title,
    upVotes,
    downVotes,
    _id,
    description,
    imgUrl,
    createdOn,
  } = props;
  const { deleteIssue, editIssue, vote} = useContext(IssueContext);

  const {
    token, 
    user: {username}
  } = useContext(UserContext)

  const [issue, setIssue] = useState({
    title, 
    description, 
    imgUrl
  })

  
  const formattedDate = moment(createdOn).format('MMMM DD, YYYY');

  const [isEditing, setIsEditing] = useState(false)
  const [show, setShow] = useState(false)

  function handleShow(){
    setShow(true)
  }
  function handleClose(){
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



  return (
    <div className='issue-container'>
      <div>
        <div className='card'>
          <img src = {imgUrl} className='card-img-top'
          alt = {title}
          />
          <h3 className = "card-title">{title}</h3>
          <p className='card-body'>{description}</p>
        </div>
        <div className='votes-container'>
          <p className='upvotes'>{upVotes}</p>
          <button className='upvotes-button' onClick={() => vote(_id, 'up')}>👍</button>
          <p className="downvotes">{downVotes}</p>
          <button className="downvotes-button" onClick={() => vote(_id, 'down')}>
            👎
          </button>
        </div>
        <div className='created-date-container'>
          <p className='issue-creation-date'>{formattedDate}</p>
          <div className='button-container'>
            <button className='edit-button' onClick={handleEdit}>
            <i className="fas fa-pen"></i>
            </button>
            <button className='delete-button' onClick={handleDelete}>
            <i className="fas fa-trash"></i>
            </button>
          </div>

        </div>
        <>        <Modal show = {show}
        onHide = {handleClose}
        backdrop = "static"
        keyboard = {false}
        >
        <Modal.Header closeButton>
          <Modal.Title>Edit Issue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input className='edited-input'
           value={issue.title}
           onChange={(e) => setIssue({ ...issue, title: e.target.value })}
           placeholder="title"
          />
          <input className='edited-input'
                  value={issue.imgurl}
                  onChange={(e) => setIssue({ ...issue, imgUrl: e.target.value })}
                  placeholder="Image Url"
          />
          <input className='edited-input'
                    value={issue.description}
                    rows="6"
                    onChange={(e) =>
                      setIssue({ ...issue, description: e.target.value })
                    }
                    placeholder="Description"
          />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>X</button>
          <button onClick={handleSave}>Save</button>
        </Modal.Footer>
        </Modal>
        </>
      </div>
    </div>
  )}
