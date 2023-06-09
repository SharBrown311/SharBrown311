import React from 'react'
import "./comment.css"

export default function Comment(props) {
  const { comment, username, page, deleteComment, _id } = props

  function deleteButton() {
    if (page === "profile") {
      return <button onClick={() => deleteComment({ username, comment }, _id)}>Delete</button>
    } else { return null }
  }

  return (
    <div className='comment'>
      <div className='commentInput'>
        <p className='username-comment'>{username} :</p>
        <p className='comment'>&nbsp;{comment}</p>
      </div>
      {deleteButton()}
    </div>
  )
}