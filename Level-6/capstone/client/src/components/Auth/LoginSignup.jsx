import Navbar from "../Navbar/Navbar"
import Auth from "./Auth"
import Profile from "../Pages/Profile"
import ProtectedRoute from "../Pages/ProtectedRoute"
import React from 'react'
import {Routes, Route} from 'react-router-dom'
function LoginSignup() {
  return (
    <div className = "signin-signup-container">
     {token && <Navbar logout = {logout} /> }
      <Routes>
      <Route path = "/"
      element = {token ? <Navigate to = "/profile" /> : <Auth />}
      />
      <Route path = "/profile"
      element = {
        <ProtectedRoute token = {token} redirectTo = "/">
        <Profile />
        </ProtectedRoute>
      }
      />
      <Route path = "/home"
      element = {
        <ProtectedRoute token = {token}
        redirectTo = "/">
        <Home />
        </ProtectedRoute>
      }
      />
      </Routes>
    </div> 
     )
}

export default LoginSignup
