import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  return (
    <div>

      <br />
      <button onClick = {() => navigate("/")}>Go to the Home Page</button>
      <button onClick={() => navigate("/create")}>Create your perfect Study Buddy</button>
      <button onClick = {() => navigate("/study")}>Practice for Perfect</button>
    </div>
  )
}

export default Navbar
