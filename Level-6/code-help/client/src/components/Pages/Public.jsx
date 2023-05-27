import React, { useContext, useEffect } from 'react'
import { IssueContext } from '../../context/IssueProvider'
import { CommentContext } from '../../context/CommentProvider'
import IssueList from '../Issues/IssueList'
import CommentForm from '../Comments/CommentForm'
import CommentLIist from '../Comments/CommentList'
import Issue from '../Issues/Issue'

function Public({publicIssues}) {
  const {getPublicIssues, likeIssue, dislikeIssue} = useContext(IssueContext)
  const {addComment} = useContext(CommentContext)

  const userId = user._id
  return (
<div className='text-center pt-3'>
<h2>All Public Issues</h2>
{publicIssues?.map(issue => (
  <div className='comment-section' key = {issue._id}> 
  <Issue {...issue} />
    <span className='likes-counter'>
      {issue.likes.length === 0 ? '' : <img src = "../../images/upThumb.jpeg" />}
    </span>
  </div>
))}
</div>
  )
}

export default Public
