import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Navbar(props){
  const { logout } = props
  return (
    <nav>
      <Link to="/issues">Home</Link>
      <Link to="/profile">Profile</Link>
      <button onClick={logout}>Logout</button>
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired
}