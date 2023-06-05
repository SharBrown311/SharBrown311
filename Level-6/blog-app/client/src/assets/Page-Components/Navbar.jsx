import React from "react";
import { Link } from "react-router-dom";
import './nav.css'
export default function Nav(props) {
  const { logout } = props;
  return (
    <nav className="w3-top">
    <div className="nav-links">
      <Link className="w3-bar-item w3-button w3-padding-large w3-hover-white" title="Profile" to="/profile">Profile</Link>
      <Link className="w3-bar-item w3-button w3-padding-large w3-hover-white" title="Public" to="/public">Public</Link>
      <button className="btn btn-primary" onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}
