import React, {useState} from 'react'
import CommentList from '../Comments/CommentList'
import CommentForm from '../Comments/CommentForm'

function Post(props){
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
    deletePost,
    page,
    userErr,
    setUserErr
  } = props
  const [addComment, setAddComment] = useState(false)
  const [isError, setIsError ] = useState(false)

  function deleteButton(){
    if(page === "profile"){
      return <button className="delete-post-button" onClick={() => deletePost(_id)}>Delete</button>
    }else{
      return null
    }
  }
  
  function displayError(id){
    if(id === _id){
      setIsError(!isError)
      setTimeout(() => {return (setIsError(false))}, 2000)
    }
  }

  return (
    <div className='post'>
      <div className='post-container'>
        <div className='post-title'>
          <h4>{title}</h4>
          {deleteButton()}
        </div>
          <img src = {imgUrl} alt = {title} />
          <div className='post-description'>
            <p>{description}</p>
            <p className='username'>Posted By: {username}</p>
          </div>
          <div className='vote-container'>
            <div>
              <button onClick = {() => {
                return (upVote(_id), displayError(_id)) }}>✔</button>
                <p>{votes}</p>
                <button onClick={() => {
                  return (downVote(_id), displayError(_id)) }}>❌</button>
            </div>
            <div>
            <button onClick={() => { setAddComment(!addComment) }}>➕ Comment</button>
          </div>
    
          </div>
          {isError && userErr}
          </div>
          <CommentList 
                  comments = {comments}
                  _id = {_id}
                  page = {page}
                  deleteComment = {deleteComment}
                  />
                  {addComment && <CommentForm _id = {_id} setAddComment={setAddComment} />}

    </div>
  )
}

export default Post