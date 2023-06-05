import React from "react";
import { Link } from "react-router-dom";
import "./comps.css"
export default function Nav(props) {
  const { logout } = props;
  return (
    <nav className="navbar">
    <div className="nav-links">
      <Link className="nav-link" to="/profile">Profile</Link>
      <Link className="nav-link" to="/public">Public</Link>
      <button className="btn btn-primary" onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}
