import React, { useState } from "react"
import CommentList from "./CommentList"
import CommentForm from "./CommentForm"
export default function Issue(props) {
  const {
    title,
    description,
    votes,
    imgUrl,
    upVote,
    downVote,
    _id,
    username,
    comments,
    deleteComment,
    deleteIssue,
    page,
    userErr} = props

  const [addComment, setAddComment] = useState(false)
  const [isError, setIsError] = useState(false)

  function deleteButton() {
    if (page === "profile") {
      return <button className="deleteIssueBtn w3-button w3-theme" onClick={() => deleteIssue(_id)}>Delete</button>
    } else { return null }
  }

  function displayError(id) {
    if (id === _id) {
      setIsError(!isError)
      setTimeout(()=>{ return (setIsError(false))}, 2000)
    } else { return null }
  }

  return (
    <div className = "page-container">
    <div className="column-2-container">
    <div className="w3-container w3-margin w3-card card column">
      <br />
    
      <div >
      <img src={imgUrl} alt={title} className="image-issue w3-border w3-padding w3-margin-right"></img>
        <div className="issueTitle">
          <h2>{title}</h2>
          {deleteButton()}
        </div>
        
        <div className="userDescription">
          <p>{description}</p>
          <p className="username">- {username}</p>
        </div>
        <div className="vote-container">
          <div>
          <p>
            <button className="w3-button w3-theme" onClick={() => { return (upVote(_id), displayError(_id)) }}>⬆</button>
            {votes}
            <button className="w3-button w3-theme" onClick={() => { return (downVote(_id), displayError(_id)) }}>⬇</button>
            </p>
          </div>
          <div>
            <button className="w3-button w3-theme" onClick={() => { setAddComment(!addComment) }}>✚ 💬</button>
          </div>
        </div>
        <p style={{color:"red"}}>{isError && userErr} </p>
      </div>
      <CommentList
      className = "comment-list-component"
        comments={comments}
        _id={_id}
        page={page}
        deleteComment={deleteComment} />
      {addComment && <CommentForm _id={_id} setAddComment={setAddComment}
      className = "comment-form-component"
      />
      
      }
    </div>
    </div>
    </div>
  )
}