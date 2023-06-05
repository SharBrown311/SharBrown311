import React, {useEffect, useContext} from 'react'
import { UserContext } from '../Context/UserProvider'
import { IssueContext } from '../Context/IssueProvider'
import Issue from '../Issues/Issue'
import "./pages.css"
function Profile() {
  const { user: { username } } = useContext(UserContext);
  const {
    _id,
    upVotes, 
    downVotes,
    getIssues,
    issues, 
    getUserIssues,
    getComments, 
    addComment,
    vote, 
    deleteComment
  } = useContext(IssueContext)
  
  useEffect(() => {
    getUserIssues()
    getComments()
  }, [])


  return (
    <div className='profile'>
    <h1>Welcome <span className='profile-welcoming'> {username}!</span></h1>
      <div>
        {issues?.map(issue => (
          <Issue 
          {...issue}
          key = {issue._id}
          addIssue = {addIssue}
          deleteIssue = {deleteIssue}
          editIssue = {editIssue}
          getComments = {getComments}
          _id = {_id}
          vote = {vote}
          />
        ))}
      </div>
    </div>
  )
}

export default Profile
