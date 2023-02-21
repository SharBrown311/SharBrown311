import React from 'react'

export default function Ugly(props) {
  console.log('Props: ' , props)
  const {item: {title, description, imgUrl}} = props


  function handleDelete(e){
    
  }
  function handleEdit(e){
    alert(props)
  }


  return (
    <div className='ugly-thing-container'>
      <h1 className='output-title'>{title}</h1>
      <h5 className='output-description'>{description}</h5>
      <img className = "output-image"src = {imgUrl} alt ={title}/>
      <div className='button-container'>
      <button onClick = {handleEdit} className='edit'>Edit</button>
      <button  className='delete'>Delete</button>
      </div>
    </div>
  )
}
