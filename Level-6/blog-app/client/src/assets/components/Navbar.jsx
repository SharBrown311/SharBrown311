//Header and navbarimport React from "react";
import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
export default function Nav() {
  const { logout, getIssues } = useContext(UserContext);
  return (
    <nav className="navbar">
    <div className="nav-links">
      <Link className="nav-link" to="/profile">Profile</Link>
      <Link onClick = {getIssues}className="nav-link" to="/public">Public</Link>
      <button className="logout-btn" onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}