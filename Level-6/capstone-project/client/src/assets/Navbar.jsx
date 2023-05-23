import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Navbar.css"
export default function Nav(props) {
  const { logout } = props;
  const navigate = useNavigate()
  return (
    <nav className="navigation-routes">
      <button className="button-routes" to="/" onClick={() => navigate("/")}>Home</button>
      <button className="button-routes" onClick={() => navigate("/decks")}>Quiz Yourself</button>
      <button className="button-routes" onClick = {() => navigate("/study")}>Study FlashCards</button>
      <button className="button-routes" onClick={logout}>Logout</button>
    </nav>
  );
}
