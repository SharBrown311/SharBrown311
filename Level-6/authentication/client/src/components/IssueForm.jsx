import React, { useState } from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import './Styles.css'
const initInputs = {
  title: "",
  description: "",
  imgUrl: "",
};

export default function IssueForm(props) {
  const [inputs, setInputs] = useState(initInputs);
  const { addIssue } = props;

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addIssue(inputs);
    setInputs(initInputs);
  }

  const { title, description, imgUrl } = inputs;

  return (
    <Form onSubmit={handleSubmit} className="w-25p">
    <Form.Group>
      <Form.Control
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={handleChange}
      />
      </Form.Group>
      <Form.Group>
      <Form.Control
        name="description"
        placeholder="Description"
        value={description}
        onChange={handleChange}
        cols="30"
        rows="10"
      />
      </Form.Group>
      <Form.Group>
      <Form.Control
        type="text"
        name="imgUrl"
        placeholder="Image URL"
        value={imgUrl}
        onChange={handleChange}
      />
      </Form.Group>
      <Button>Add Issue</Button>
    </Form>
  );
}
