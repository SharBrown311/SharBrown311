import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Navbar.css"
import "../App.css"
export default function Nav(props) {
  const { logout } = props;
  const navigate = useNavigate()
  return (
    <div className = "Navbar">
    <nav className="navigation-routes">
      <button className="button-routes" to="/" onClick={() => navigate("/")}>Home Page</button>
      <button className="button-routes" onClick={() => navigate("/decks")}>FlashCard Creator</button>
      <button className="button-routes" onClick = {() => navigate("/study")}>Study & Quiz Yourself</button>
      <button className="button-routes" onClick={logout}>Logout</button>
    </nav>
    </div>
  );
}
