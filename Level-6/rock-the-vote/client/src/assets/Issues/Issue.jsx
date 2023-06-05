import React, { useContext, useState } from 'react';
import moment from 'moment';
import './issue.css';
import { IssueContext } from '../Context/IssueProvider';
import EditIssue from "./EditIssue"

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
  const { deleteIssue, editIssue, issue, vote, addComment, getComments, deleteComment, comments} = useContext(IssueContext);


  const formattedDate = moment(createdOn).format('MMMM DD, YYYY');
  const [editToggle, setEditToggle] = useState(false);



  return (
    <div className='issue'>
      {!editToggle ? (
        <>
        <div className='card'>
        <img className='card-img-top' src = {imgUrl} alt = {title} />
          <h3 className='card-title'>{title}</h3>
          <p className='card-body'>{description}</p>
        </div>
        <div className='votes-container'>
        <p className='upvotes'>
          {upVotes}
        </p>
        <button className='upvotes-button' onClick={() => vote(_id, 'up')}>👍</button>
        <p className="downvotes">{downVotes}</p>
          <button className="downvotes-button" onClick={() => vote(_id, 'down')}>
            👎
          </button>
          </div>
        <div className="created-date-container">
          <p className="issue-creation-date">{formattedDate}</p>
          <div className="buttons-container">
            <button className='delete-button' onClick={() => deleteIssue(_id)}>
            <i className="fas fa-trash"></i>
            </button>
            <button className = "edit-button" onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            <i className="fas fa-pen"></i>
            
          </button>
          <div className='comments-container'>
            {comments}
            </div>
          </div>
        </div>

        
        </>
        
      ) : (
        <>
        <EditIssue
          title = {title}
          description = {description}
          imgUrl = {imgUrl}
          _id = {_id}
          btnText = "Save"
          submit = {props.editIssue}
          closeModal = {() => setEditToggle(false)}
          openModal = {() => setEditToggle(true)}
        />
        <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            X
          </button>
        </>
      )}
</div>

  )}
