import React, { useState, useContext } from "react"
import { UserContext } from "../../../Context/UserProvider"
import "./issue.css"

export default function IssueForm(props) {
  const { addIssue } = props
  const { user: {username} } = useContext(UserContext)

  const initInputs = {
    title: "",
    description: "",
    imgUrl: "",
    username: username
  }

  const [inputs, setInputs] = useState(initInputs)

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(prevInput => ({
      ...prevInput,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    addIssue(inputs)
    setInputs(initInputs)
  }

  const { title, description, imgUrl } = inputs

  return (
    <form className="issue-form" onSubmit={handleSubmit}>
      <input
      className="form-control"
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={handleChange}
      ></input>
      <input
      className="form-control"
        type="text"
        name="imgUrl"
        placeholder="Image URL"
        value={imgUrl}
        onChange={handleChange}
      ></input>
      <textarea
      className="form-control"
        type="text"
        name="description"
        placeholder="Description"
        value={description}
        onChange={handleChange}
      ></textarea>
      <button className="btn btn-outline-warning">Add Issue</button>
    </form>
  )
}