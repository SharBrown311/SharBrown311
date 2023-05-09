import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/esm/Button";
import './Styles.css'
export default function CommentForm({ _id }) {
  const { user, addComment } = useContext(UserContext);
  const [input, setInput] = useState({ text: "" });
  //const [comment, setComment] = useState("")
  console.log(_id);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(_id);
    //alert("Submit")
    addComment(_id, input);
    setInput(input);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
      <Form.Group>
        <h3>Author: {user.username}</h3>
        <Form.Control
          name="text"
          value={input.text}
          onChange={handleChange}
          placeholder="Add a comment"
        />
        </Form.Group>
        <Button type = "submit">Submit</Button>
      </Form>
    </div>
  );
}
