import React, {useContext} from "react";
import '../App.css'
import './Header.css'
import { useNavigate} from "react-router-dom";
import { UserContext } from "../assets/context/UserProvider";
export default function Header() {
  const { logout, user:{username} } = useContext(UserContext);
  const navigate = useNavigate()
  return (
    <div className = "Navbar wrapper header-area header-sticky  slideInDown animated">
      <h4 className="welcome-header">Welcome <span style={{textTransform: "capitalize"}}>{username}!</span></h4>
    <nav>
      <ul className="navbar menu">
      <li>
      <button className="button-routes" to="/" onClick={() => navigate("/")}>Home Page</button>
      </li>
      <li>
        <button className="button-routes">Create</button>
          <ul className="sub-menu nav">
            <li className="sub-link">
        <button className="button-routes sub-link" onClick={() => navigate("/decks")}> Flashcard Creator</button>
        </li>
          <li className="sub-link">
        <button className="button-routes sub-link" onClick = {() => navigate("/study")}>Quiz & Study</button>
        </li>
        <li className="sub-link">
        <button className="button-routes sub-link" onClick = {() => navigate("/notes")}>Note Taking</button>
        </li>
        </ul>
        </li>
      <li >
      <button className="button-routes" onClick={logout}>Logout</button>
      </li>

     
      </ul>
    </nav>
    <br />
    <br />
    
    </div>
  );
}

