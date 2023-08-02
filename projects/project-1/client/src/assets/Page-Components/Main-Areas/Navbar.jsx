import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../context/UserProvider'

function Navbar() {
  const {token , logout} = useContext(UserContext)
  return (
    <div className='navbar'>
      <Link to = "/">Home</Link>
     <Link to = "/dashboard">Dashboard</Link>
    <button onClick = {logout}>Logout</button>
     <Link to = "/auth">Login</Link>
    </div>
  )
}

export default Navbar



