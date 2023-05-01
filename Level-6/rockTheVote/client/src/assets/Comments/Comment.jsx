import React from 'react'

function Comment(props) {
  const {comment, username, page, deleteComment, _id} = props


  function deleteButton(){
    if(page === "profile"){
      return <button onClick={() => deleteComment({username, comment}, _id)}>Delete Comment</button>
    }else{
      return null
    }
  }
  return (
    <div className='comment-container'>
    <div className='commentInput'>
      <p>{username} : </p>
      <p>{comment}</p>
    </div>
    {deleteButton()}
  </div>
  )
}

export default Comment
