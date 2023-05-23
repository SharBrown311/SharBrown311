import React, { useContext } from 'react'
import "../CSS/IssueStyles.css"
import { UserContext } from '../../context/UserProvider'
import IssueContainer from './IssueContainer'
function Issue(props) {
  const {issue, deleteIssue} = props

  const {editIssue} = useContext(UserContext)

  function handleDelete(){
   deleteIssue(issue._id)
  }


  return (
    <div className="issue-container">
    <div className="issue-card">
    <img className = "issue-image" src = {issue.imgUrl} alt = {issue.title} />
      <h3 className="issue-title">{issue.title}</h3>
      <p className="issue-description">{issue.description}</p>
      <div className="comment-component-container">
      </div>
      <hr />
      <div className='button-container'>
      <IssueContainer />
      <button onClick={(e) => editIssue()}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>

        </div>

    </div>
  )
}

export default Issue
