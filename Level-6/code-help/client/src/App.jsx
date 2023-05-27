import { useContext } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import Home from "./components/Pages/Home"
import { UserContext } from './context/UserProvider'
import Auth from './components/Authorization/Auth'
import Public from './components/Pages/Public'
import Profile from './components/Pages/Profile'
import Navbar from './components/Navbar/Navbar'
import ProtectedRoute from './components/ProtectedRoutes/ProtectedRoute'
import Footer from './components/Pages/Footer'

function App() {
  const {token, logout} = useContext(UserContext)
  return (
    <div className='app'>
      <Navbar logout = {logout} token = {token} />
      <Routes>
        {token && <Route path = "/" element = {<Home />} />}
        {!token && <Route path = "/" element = {<Navigate to = "/public" />} />}

        {!token && <Route path = "/auth" element = {<Auth />} />
       }
       {token && 
        <Route path = "/auth"
        element = {<Navigate to = "/" />} />
      }
      <Route
      path="/profile"
      element={
        <ProtectedRoute token={token} redirectTo="/public">
          <Profile />
        </ProtectedRoute>
      }
    />
    <Route
      path="/"
      element={
        <ProtectedRoute token={token} redirectTo="/public">
          <Home />
        </ProtectedRoute>
      }
    />
    <Route
      path="/public"
      element={<Public />}
    />
      </Routes>
      <Footer />
      </div>
  )
}

export default App
