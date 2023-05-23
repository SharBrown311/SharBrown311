import React, {useContext, useEffect} from 'react'
import "../CSS/PageStyles.css"
import IssueForm from '../Issue/IssueForm'
import { UserContext } from '../../context/UserProvider'
import IssueList from '../Issue/IssueList'
function Profile() {
  const {
    user: {
        username
    },
    addIssue,
    getUserIssues,
    issues,
    editIssue, 
    deleteIssue, 
    addVote, 
    removeVote,
    addComment
} = useContext(UserContext)

useEffect(() => {
    getUserIssues()
}, [])

  return (
    <div>
    <div className='profile-container'>
        <h2>Welcome <span className='username-welcome'>{username}!</span></h2>
        <p>Add an Issue</p>
        <IssueForm addIssue = {addIssue} />
    </div>
    <h3 className='userIssue-list-header'>
      Issues made by <span className='username-issueList'>{username}</span>
    </h3>
    <IssueList issues = {issues} editIssue = {editIssue}
    deleteIssue = {deleteIssue}
    />
    </div>
  )
}

export default Profile
