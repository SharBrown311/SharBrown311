import React, {useContext, useEffect} from 'react'
import { IssueContext } from '../Context/IssueProvider'
import Issue from '../Issues/Issue'
import CommentForm from '../Comment/CommentForm'
import Comments from '../Comment/Comments'
import { UserContext } from '../Context/UserProvider'

function Public(){
  const { user: { username } } = useContext(UserContext);
  const {
    _id,
    upVotes, 
    downVotes,
    getIssues,
    issues, 
    getComments, 
    addComment,
    vote, 
    deleteComment
  } = useContext(IssueContext)

  useEffect(() => {
    getIssues()
    getComments()
  }, [])

  return(
    <div className='public'>
      <div>
        <h2>Current Issues: </h2>
        {issues?.map(issue => (
          <Issue 
          {...issue}
          upVotes = {upVotes}
          downVotes = {downVotes}
          key = {issue._id}
          vote = {vote}
          _id = {_id}
          getComments = {getComments}
          addComment= {addComment}
          deleteComment = {deleteComment}
          />
          
          
        ))}
      </div>
    </div>
  )
}
export default Public