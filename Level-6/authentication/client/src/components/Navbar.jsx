import React from "react";
import { Link } from "react-router-dom";
import './Styles.css'
export default function Nav(props) {
  const { logout } = props;
  return (
    <nav className="navbar" style = {{
      display: "flex", flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-around"
    }}>
      <Link to="/profile">Profile</Link>
      <Link to="/public">Public</Link>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}
