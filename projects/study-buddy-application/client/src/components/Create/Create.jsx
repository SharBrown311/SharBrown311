import React  from 'react'
import { useNavigate } from 'react-router-dom'
import '../Header/Header.css'
import { Dropdown } from 'react-bootstrap';
import './Create.css'
function Create() {
  const navigate = useNavigate()
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle className='dropdown-toggle'>
          Create
        </Dropdown.Toggle>
        <Dropdown.Menu className='dropdown-menu'>
        <Dropdown.Item className = "dropdown-item" eventKey="1" active><button className='button-routes sub-link' onClick = {() => navigate("/decks")}>
            Flashcard Creator
          </button></Dropdown.Item>

          <Dropdown.Item eventKey = "2"
          className = "dropdown-item" 
          > 
          <button className='button-routes sub-link' onClick = {() => navigate('/study')}>Quiz & Study</button>
          </Dropdown.Item>
          
          
          <Dropdown.Item eventKey="3"
          className = "dropdown-item" 
          >
          <button className='button-routes sub-link' onClick = {() => navigate('/notes')}>Note Taking</button>
          </Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default Create
