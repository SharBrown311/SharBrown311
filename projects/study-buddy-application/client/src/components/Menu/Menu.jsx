import React from 'react'
import './Menu.css'
import {Link, useNavigate} from 'react-router-dom'

function Menu() {
  const dropFunction = function dropdownFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "main-nav") {
      x.className += " responsive";
    } else {
      x.className = "main-nav";
    }
  }
  const navigate = useNavigate()
  return (
    <div className="header-area header-sticky wow" data-wow-duration="0.75s" data-wow-delay="0s" style={{visibility: "visible", animationDuration: "0.75s",animationDelay: "0s"}}>
    <div className="topnav" id="myTopnav">
  <a className="active">Home</a>
  <a href="#services">Services</a>
  <a href="#about">About</a>

{/* <li className='scroll-to-section'> */}
        {/* <div className='gradient-button'>
            <a id = "trigger" type = "button" data-toggle = "modal" datatarget = "#authModal" onClick = {() => setShow(!show)}>
              <i className="fa fa-sign-in-alt"></i> Signup Now</a><Modal1 show={show} setShow={setShow}></Modal1></div>
      </li> */}
      <li className='scroll-to-section'><div className='gradient-button'><a onClick={logout}><i className='fas fa-door-open'></i></a></div></li>
</div>
</div> 

  )
}

export default Menu
