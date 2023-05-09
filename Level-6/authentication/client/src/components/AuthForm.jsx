import React from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import './Styles.css'
export default function AuthForm(props) {
  const {
    handleChange,
    handleSubmit,
    btnText,
    errMsg,
    inputs: { username, password },
  } = props;

  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group>
    <Form.Control
        type="text"
        value={username}
        name="username"
        onChange={handleChange}
        placeholder="Username"
      />
      </Form.Group>  
      <Form.Group>
      <Form.Control
        type="text"
        value={password}
        name="password"
        onChange={handleChange}
        placeholder="Password"
      />
      </Form.Group>
      <Button className="btn btn-primary">{btnText}</Button>
      <p style={{ color: "red" }}>{errMsg}</p>
    </Form>
  );
}
