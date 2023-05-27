import React, { useContext, useEffect } from 'react'
import IssueForm from '../Issues/IssueForm'
import IssueList from '../Issues/IssueList'
import { UserContext } from '../../context/UserProvider'
import { IssueContext } from '../../context/IssueProvider'
import { CommentContext } from '../../context/CommentProvider'
function Profile() {
  const {user: {username}} = useContext(UserContext)
  const {addIssue, getUserIssues, issues, editIssue, deleteIssue, likeIssue, dislikeIssue} = useContext(IssueContext)

  const {addComment} = useContext(CommentContext)

  useEffect(() => {
    getUserIssues()
  }, [])
  return (
    <div className='profile-wrapper'>
    <div className='container bg-light py-3 my-3'>
    <h1>Welcome {username}!</h1>
    <p>Add an issue</p>
    <IssueForm addIssue={addIssue} />
</div>

<h3 className='text-center'>Issues you've added</h3>
<IssueList issues={issues} editIssue = {editIssue}
deleteIssue = {deleteIssue}
likeIssue = {likeIssue}
dislikeIssue = {dislikeIssue}


/>
    </div>
  )
}

export default Profile

