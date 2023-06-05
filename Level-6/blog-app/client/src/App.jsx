import React, {useContext} from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from "./assets/Page-Components/Navbar"
import ProtectedRoute from './assets/Page-Components/ProtectedRoute'
import Auth from './assets/Authorization/Auth'
import Profile from './assets/Pages/Profile'
import Public from './assets/Pages/Public'
import { UserContext } from './Context/UserProvider'
import Footer from './assets/Page-Components/Footer'

function App() {
  const {
    token, logout
  } = useContext(UserContext)

  return (
 <div className="w3-theme-15">
    {token && <Navbar logout={logout} />}
    <Routes>
      <Route
        path="/"
        element={token ? <Navigate to="/profile" /> : <Auth />}
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute token={token} redirectTo="/">
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/public"
        element={
          <ProtectedRoute token={token} redirectTo="/">
            <Public/>
          </ProtectedRoute>
        }
      />
      
    </Routes>
    <Footer />
  </div>
  )
}

export default App
