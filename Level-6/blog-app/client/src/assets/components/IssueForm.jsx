import React, {useState} from 'react'



const initInputs = {
title: "",
description: "",
image: ""
}
function IssueForm(props) {
//    const [title, setTitle] = useState("")
//   const [description, setDescription] = useState("")
// const [image, setImage] = useState("")

const [inputs, setInputs] = useState(initInputs)




const handleSubmit = (e) => {
  e.preventDefault()
  props.submit(inputs, props._id)
  setInputs(initInputs)

}

const { title, description, image } = inputs
  return (
    <div className='issueForm'>
      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input className='Title'
        type = 'text'
        placeholder='Title...'
        onChange = {(e) => setInputs(e.target.value)} 
        value={title}
        />
        <p>Description</p>
        <input className='Description'
        type = 'text'
        placeholder='Description...'
        onChange = {(e) => setInputs(e.target.value)} 
        value = {description}
        />
        <p>Image Url</p>
        <input className='Image'
        type = 'text'
        placeholder='Image Address...'
        onChange = {(e) => setInputs(e.target.value)} 
        value={image}
        />
        <button>{props.btnText}</button>
      </form>
    </div>
  )
}
export default IssueForm
