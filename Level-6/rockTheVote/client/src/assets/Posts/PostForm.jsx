import React, { useState, useContext } from "react"
import { UserContext } from "../../context/UserProvider"


export default function PostForm(props) {
  const { addPost } = props
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
    addPost(inputs)
    setInputs(initInputs)
  }

  const { title, description, imgUrl } = inputs

  return (
    <form className="postForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="imgUrl"
        placeholder="Image URL"
        value={imgUrl}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={description}
        onChange={handleChange}
      ></input>
      <button>Add Post</button>
    </form>
  )
}