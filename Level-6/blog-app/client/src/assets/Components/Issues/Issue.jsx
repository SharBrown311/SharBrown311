import React, { useContext, useState } from "react"
import moment from 'moment'
import CommentList from "../Comments/CommentList"
import CommentForm from "../Comments/CommentForm"
import "./issue.css"
import { UserContext } from "../../../Context/UserProvider"

export default function Issue(props) {
  const {
    title,
    description,
    createdOn,
    vote,
    imgUrl,
    upVotes,
    downVotes,
    _id,
    comments,
    deleteComment,
    deleteIssue,
    editIssue,
    page,
    userErr,
    setUserErr,
  
  } = props
const {user: {username}} = useContext(UserContext)
  const [addComment, setAddComment] = useState(false)
  const [isError, setIsError] = useState(false)

  function deleteButton() {
    if (page === "profile") {
      return <button className="deleteIssueBtn" onClick={() => deleteIssue(_id)}>Delete</button>
    } else { return null }
  }
  function editButton(){
    if(page === "profile"){
      return <button className="editIssueBtn" onClick={() => editIssue(_id)}>Edit</button>
     }
  }


  const formattedDate = moment(createdOn).format('MMMM DD, YYYY');
console.log(username)
  return (
    <div className="issue">
      <p style={{color: 'red'}}>{userErr}</p>
      <div className="card" style = {{textAlign: 'center'}}>
        <div>
          <h2 className = "card-title">{title}</h2>
          <p>Posted By: 
            <span> {username}</span></p>
          {deleteButton()}
          {editButton()}
        </div>
        <img className="card-img-top" src={imgUrl} alt={title}></img>
        <div className="userDescription">
          <p className="card-body">{description}</p>
    
        </div>
        <hr/>
        <div>{formattedDate}</div>
        <div className="votes-container">
          <div className="upvotes-container">
            <p className="upvotes">{upVotes}</p>
            <button className="upvotes-button" onClick={() => vote(_id, 'up')}>Like</button>
            </div>
            <div>
            <p className="downvotes">{downVotes}</p>
            <button className = "downvotes-button" onClick={() => vote(_id, 'down')}>Dislike</button>
            </div>
            <button onClick={() => { setAddComment(!addComment) }}>✚ 💬</button>
        </div>
        {isError && userErr}
      </div>
      <CommentList
        comments={comments}
        _id={_id}
        page={page}
        deleteComment={deleteComment} />
        {addComment && <CommentForm _id={_id} setAddComment={setAddComment} />}
    </div>
  )
}