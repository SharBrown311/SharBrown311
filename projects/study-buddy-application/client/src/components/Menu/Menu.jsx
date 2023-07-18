import React from 'react'
import "./Menu.css"
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Menu() {
  return (
    <Navbar
    collapseOnSelect
    expand = "lg" className="bg-body-tertiary .navbar-menu" id = "Menu">
    <Container className = "menu-container">
      <Navbar.Brand href="/"></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle-button' />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className='nav-item'><Link to ="">Home</Link></Nav.Link>
          <Nav.Link className = "scroll-to-section nav-item" href="#services">Services</Nav.Link>
          <Nav.Link className = "scroll-to-section nav-item" href="#about">About</Nav.Link>
          <NavDropdown title="Create" id="collapsible-nav-dropdown"
          className='nav-item'
          >
            <NavDropdown.Item href="#action/3.1"><Link to = "/decks">Flashcard Creator</Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            <Link to = "/study">Quiz & Study</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3"><Link to = "/notes">Note Taking</Link></NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Menu
