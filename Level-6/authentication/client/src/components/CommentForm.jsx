import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";



export default function CommentForm(){ 
  
  const initComment={
    comment: ""
  }
      const [input, setInput] = useState(initComment);

      const { addComment } = useContext(UserContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setInput(prevState  => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addComment(input);
    setInput(initComment);
  }

  const {comment} = input


  return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="comment"
            value={comment}
            placeholder="Comment"
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Save Comment
          </button>
        </form>
  );
}
