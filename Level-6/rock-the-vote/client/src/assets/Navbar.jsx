import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props){
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false)
  const { logout, token } = props;


return(
  <div className="header">
    <div className="image">
    <ul className={click ? "nav-options active" : "nav options"}>
      {" "}
   
      {token && (
        <li className="option" onClick={closeMenu}>
          <Link className="link" to = "/">
            {" "}
            <i className="fas fa-house-user"></i>
          </Link>
        </li>
      )}
    </ul>
    </div>
  
  </div>
)

}