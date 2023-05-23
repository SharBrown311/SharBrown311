import React, { useContext } from 'react'
import CommentForm from './CommentForm'
import './Styles.css'


function Comment(props) {
  const {comment} = props


  return (
    <div className='comment-container'>
      <p>{comment}</p>
      <button className='edit-comment'>Edit</button>
      <button className='delete-comment'>Delete</button>
      <CommentForm />
    </div>
  )
}

export default Comment

