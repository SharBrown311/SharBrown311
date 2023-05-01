import './App.css'
import React, {useContext} from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import Nav from "./assets/Nav/Nav"
import { UserContext } from './context/UserProvider'
import Auth from './assets/Auth/Auth'
import Public from "./assets/Profiles/Public"
import Profile from "./assets/Profiles/Profile"
function App() {
   const {token, logout} = useContext(UserContext)

  return (
    <div className='App'>
      <Nav logout = {logout} token = {token} />
      <Routes>
        <Route path = "/"
        element = {token ? <Navigate replace to = "/profile" /> : <Auth />}
        />
        <Route path = "/profile"
          element = {token ? <Profile />: <Navigate replace to = "/" />}
          />
          <Route 
            path = "/public"
            element = {token ? <Public /> : <Navigate replace to = "/" />}
            />
          </Routes>
    </div>
  )
}

export default App

