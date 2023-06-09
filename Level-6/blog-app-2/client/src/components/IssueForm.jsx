import React, { useState, useContext } from "react"
import { UserContext } from "../context/UserProvider"

export default function IssueForm(props) {
  const { addIssue } = props
  const { user } = useContext(UserContext)

  const initInputs = {
    title: "",
    description: "",
    imgUrl: "",
    username: user.username
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

    <div className="column-2-container grid-item">
          <form className="w3-container w3-row-padding issue-form card column column-2" onSubmit={handleSubmit}>
      <div className="input-boxes">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={handleChange}
        className="w3-border w3-padding"
      ></input>
      <input
        type="text"
        name="imgUrl"
        placeholder="Image Url"
        value={imgUrl}
        className="w3-border w3-padding"
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        className = "w3-border w3-padding"
        value={description}
        onChange={handleChange}
      />
      <button className="w3-button w3-theme-d1 ">Add Issue</button>
    </div>

    </form>
    </div>
  )
}