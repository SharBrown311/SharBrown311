import React, { useState, useContext } from "react"
import { UserContext } from "../context/UserProvider"
import "./comment.css"

export default function CommentForm({_id, setAddComment}) {
  const {user, addComment} = useContext(UserContext)
 const [input, setInput] = useState({comment:"", username: user.username})

 function handleChange(e) {
   const {name,value} = e.target
   setInput(prevComment=> ({
     ...prevComment,
     [name]: value
   }))
 }

 function handleSubmit(e) {
   e.preventDefault()
   setAddComment(false)
  addComment(input, _id)
 }
  return(
    <form className="commentForm" onSubmit={handleSubmit}>
        <input
        type="text"
        name="comment"
        value={input.comment}
        onChange={handleChange}
        placeholder="Add Comment"
        className="comment-input w3-border w3-padding"
        >
        </input>
        <button className="w3-button w3-theme">Save</button>
    </form>
  )
}