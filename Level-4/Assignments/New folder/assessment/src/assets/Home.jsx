import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

function Home(props) {
    return (
    <div className="border">
    <UserContext.Consumer>
      <h1>Homepage</h1>
      <h2>This is the homepage</h2>
      <Link to = "/profile" >Profile</Link>
      </UserContext.Consumer>
    </div>
  );
}

export default Home;