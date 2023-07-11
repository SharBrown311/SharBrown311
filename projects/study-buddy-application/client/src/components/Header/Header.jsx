import React, {useState} from "react";
import { Dropdown } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';
import "./Header.css"
import Menu from "../Menu/Menu";
// import Create from "../Create/Create";


export default function Header(){
  const navigate = useNavigate()
  return(
<header className="header-area header-sticky wow slideInDown animated" data-wow-duration="0.75s" data-wow-delay="0s" style={{visibility: "visible", animationDuration: "0.75s",animationDelay: "0s"}}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            {/* <!-- ***** Logo Start ***** --> */}
            <a href="index.html" className="logo">
              <div className="logo-image">
              {/* <img src="assets/images/logo.png" alt="Study Buddy App"/> */}
              </div>
            </a>
            {/* <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** --> */}
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
              <li className="scroll-to-section"><a href="#newsletter">Newsletter</a></li>
              <li><div className="gradient-button"><a id="modal_trigger" href="#modal"><i className="fa fa-sign-in-alt"></i> Sign In Now</a></div></li> 
            </ul> 
               
            <a className="menu-trigger">
               <span className = "menu-span"></span>
            </a>
      
          </nav>
          </nav>
        </div>
      </div>
    </div>
  </header>
  )
  }