import React from 'react'
import CommentList from './CommentList'
function Comment(props) {
  const {comment} = props


  return (
    <div className='comment-container'>
      <p>{comment}</p>
      <button className='edit-comment'>Edit</button>
      <button className='delete-comment'>Delete</button>
      <CommentList/>
    </div>
  )
}

export default Comment

