import './App.css'
import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import Profile from './components/Profile'
import Public from './components/Public'
import Auth from './components/Auth'
import { UserContext } from './context/UserProvider'
import Footer from './UnFunctional/Footer'


function App() {
  const { token, logout } = useContext(UserContext)
  return (
    <div className='app-container'>
      <Nav logout={logout} token={token} />
      <div className='page-container'>
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate replace to="/profile" /> : <Auth />}
        />
        <Route
          path="/profile"
          element={token ? <Profile className = "profile-component" /> : <Navigate replace to="/" />}
        />
        <Route
          path="/public"
          element={token ? <Public className = "public-component" /> : <Navigate replace to="/" />}
        />
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;