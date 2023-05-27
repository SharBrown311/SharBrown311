import React, { useContext } from 'react'
import './Styles.css'


function Comment(props) {
  const {comment} = props


  return (
    <div className='comment-container'>
      <p>{comment}</p>
  <button className='edit-comment'>Edit</button>
      <button className='delete-comment'>Delete</button>
      <Comment/>
    </div>
  )
}

export default Comment

