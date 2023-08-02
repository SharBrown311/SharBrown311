import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'
import { UserContext } from './UserProvider'
import Auth from './Auth'
import './Navbar.css'

function Navbar() {
  const navigate = useNavigate()
  const {token, logout} = useContext(UserContext)
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="header-area header-sticky wow" data-wow-duration="0.75s" data-wow-delay="0s" style={{visibility: "visible", animationDuration: "0.75s",animationDelay: "0s"}}>

    <nav className="topnav" id="myTopnav">
      <button onClick= {() => navigate("/")}>Home</button>
      <button onClick = {() => navigate("/dashboard")}>Dashboard</button>
      <button>
      <a href = "#services">Services</a></button>
      <button>      <a href = "#about">About</a>
      </button>
      <button>
      <a href = "#clients">Our Reviews</a>
      </button>
      {token ? (
        <button onClick={logout}>
          Logout
        </button>
      ) : (
       <div>
        <button onClick={openModal}>  Login</button>
          <Modal isOpen = {modalOpen} closeModal = {closeModal} >
     

          <Auth />
        </Modal>
        </div>
      )}
    </nav>
    </div>
  )
  }

export default Navbar