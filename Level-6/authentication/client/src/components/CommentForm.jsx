import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";



export default function CommentForm(){ 
  
  const initComment={
    text: ""
  }
      const [commentText, setCommentText] = useState(initComment);
  
      const { addComment } = useContext(UserContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setCommentText(prevState  => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addComment(commentText);
    setCommentText(initComment);
  }

  const comment = input;
  console.log(comment)


  return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="comment"
            value={text}
            placeholder="Comment"
            onChange={handleChange}
          />
          <button type="submit" >
            Save Comment
          </button>
        </form>
  );
}
