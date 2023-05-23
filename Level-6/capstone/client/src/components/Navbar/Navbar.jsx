import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  const navigate = useNavigate()
  return (
    <div>
      <div className ='navigation-routes'>
      <button className = "button-routes" onClick = {() => navigate("/")}>Home Page</button>

      <button className = "button-routes" onClick={() => navigate("/onboard")}>Login in/Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar

//<button className = "button-routes" onClick = {() => navigate("/decks")}>Practice for Perfect</button>
//<button className = "button-routes" onClick={() => navigate("/study")}>Quiz yourself</button>