import React, {useContext, useState} from "react"
import Dashboard from "./assets/Page-Components/Main-Areas/Dashboard"
import {Routes, Route} from 
'react-router-dom'
import Auth from './assets/Page-Components//Authorization/Auth.jsx'
import Footer from "./assets/Page-Components/Main-Areas/Footer"
import ProtectedRoute from "./assets/Page-Components/Protected/ProtectedRoute"
import { UserContext } from "./context/UserProvider"
import Navbar from "./assets/Page-Components/Main-Areas/Navbar"
import "./App.css"
import Home from "./assets/Page-Components/Main-Areas/Home"

export default function App(){

  const { token, logout } = useContext(UserContext)
  return (
    <div className='wrapper'>
      <h1>Application</h1>
      <Navbar token = {token} logout ={logout}/>
      {token ? (
          <button onClick={logout}></button>
        ) : (
          <button>Login</button>
        )}
      <Routes>
      
       
        <Route path = "/"><Home /></Route>
        <Route path = "/login"><Auth /></Route>
        <Route path = "/dashboard" element = {<ProtectedRoute token = {token}>
          <Dashboard />
        </ProtectedRoute>} />
      
      </Routes>

    </div>
  )
}