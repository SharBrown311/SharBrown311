import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
function EditIssue(props) {
    const editedInitInputs = {
      title: props.title || "" ,
      description: props.description || "",
      imgUrl: props.imgUrl || ""
    }
    const [editedInputs, setEditedInputs] = useState(editedInitInputs)
    const [isOpen, setIsOpen] = useState(false)

    function handleChange(e){
      const {name , value} = e.target
      setEditedInputs(prevInputs => ({
        ...prevInputs, 
        [name]: value
      }))
    }

    function handleSave(e){
      e.preventDefault()
      props.submit(editedInputs, props._id)
      setEditedInputs(editedInitInputs)
    }
    function openModal(){
      setIsOpen(true)
    }
    function closeModal(){
      setIsOpen(false)
    }


  return (
    <div>
      <Modal openModal = {isOpen}>
      <form onSubmit={handleSave}>
      <input
      className='edit-title-input'
        type="text"
        name="title"
        value={editedInputs.title}
        onChange={handleChange}
        placeholder="Title"
      />
        <textarea
        className='edit-description-input'
        name="description"
        value={editedInputs.description}
        onChange={handleChange}
        placeholder="Description"
      />
         <input
         className='edit-imgUrl-input'
        type="text"
        name="imgUrl"
        value={editedInputs.imgUrl}
        onChange={handleChange}
        placeholder="Image Url"
      />
        <Modal.Footer>
        <Button>{props.btnText}</Button>
        </Modal.Footer>
        </form>
      </Modal>
    </div>
  )
}

export default EditIssue
