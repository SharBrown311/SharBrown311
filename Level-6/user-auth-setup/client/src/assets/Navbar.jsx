import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props){
  const {token, logout} = props;
  return (
    <nav className="nav">
    <Link className="links" to = "/" />
    </nav>
  )
}