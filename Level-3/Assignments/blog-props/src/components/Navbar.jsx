import React from "react";


export default function Navbar(){
return (
  <nav className="navbar navbar-expand-lg navbar-light" id = "mainNav">
  <div className="container px-4 px-lg-5">
    <a className="navbar-brand" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"> MENU
      <i className="fas fa-bars"></i>
    </button>
    <div className="navbar-collapse collapse show" id="collapsibleNavbar">
      <ul className="navbar-nav ms-auto py-4 py-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sample Post</a>
        </li>    
        <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>    
      </ul>
    </div>
  </div>
</nav>
)
  }