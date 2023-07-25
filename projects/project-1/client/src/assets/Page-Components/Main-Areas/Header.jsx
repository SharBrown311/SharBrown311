import React, {useContext} from 'react'
import { useNavigate, Link} from 'react-router-dom'
import { UserContext } from '../../../context/UserProvider'
function Header() {
  const dropFunction = function dropDownFunction(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  const navigate = useNavigate()
  const {logout} = useContext(UserContext)
  return (
<div className="topnav" id="myTopnav">
  <a href="#home" className="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <div className="dropdown">
    <button className="dropbtn">Dropdown 
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> 
  <a href="#about">About</a>
  <a style={{fontSize:"17px"}} className="icon" onClick={dropFunction}>&#9776;</a>
</div>
  )
}

export default Header