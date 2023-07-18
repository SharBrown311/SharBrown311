import React, {useState, useContext} from "react";
import { Dropdown, Modal } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';
import "./Header.css"
import Menu from "../Menu/Menu";
import ModalTry from "../Modal/ModalTry";



export default function Header(){
  const {login, signup, logout} = useContext(UserContext)
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false)

  return(
<header className="header-area header-sticky wow slideInDown animated" data-wow-duration="0.75s" data-wow-delay="0s" style={{visibility: "visible", animationDuration: "0.75s",animationDelay: "0s"}}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            {/* <!-- ***** Logo Start ***** --> */}
            <a href="index.html" className="logo">
              <div className="logo-image">
              </div>
            </a>
            <nav>
            <ul className="nav">
              <li className="scroll-to-section"><a href="#top" className="active"><Link to = "/home">Home  </Link>
              </a>
            
              </li>
              <li className="scroll-to-section"><a href="#services">Services</a></li>
              <li className="scroll-to-section"><a href="#about">About</a></li>
              <li className="scroll-to-section">
               <a className="create-component"> <Dropdown>
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
      </Dropdown></a>
              </li>
              <li><div className="gradient-button"><a id="trigger" type="button" data-toggle = "modal" data-target = "#signupModal"
              onClick={() => setOpenModal(true)}
              ><i className="fa fa-sign-in-alt"></i> Sign up/Login Now</a><ModalTry openModal = {openModal} setOpenModal = {setOpenModal} /></div></li> 
              <li>
                <div className="gradient-button"><a id = "trigger" onClick={logout}><i className="fas fa-door-open"></i></a></div>
              </li>
            </ul> 
               
            <a className="menu-trigger">
               <span className = "menu-span">
         
               </span>
            </a>
      
          </nav>
          </nav>
        </div>
      </div>
    </div>
  </header>
  )
  }