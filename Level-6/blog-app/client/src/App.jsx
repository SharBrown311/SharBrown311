import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css"
import Navbar from "./assets/components/Navbar"
import Auth from "./assets/components/Auth";
import PublicIssues from "./assets/components/PublicIssues";
import ProfileIssues from "./assets/components/ProfileIssues";
import { UserContext } from "./assets/context/UserProvider";
import ProtectedRoute from "./assets/components/ProtectedRoute";
function App() {
  const {token, logout, getIssues} = useContext(UserContext)
  
  return (
    <div className="App">
    {token && <Navbar getIssues= {getIssues} logout = {logout} /> }
    <Routes>
    <Route
      exact path="/"
      element={token ? <Navigate to="/profile" /> : <Auth />}
    />
    <Route
    path="/profile"
    element={
      <ProtectedRoute 
      token={token} 
      redirectTo = "/">
        <ProfileIssues />
      </ProtectedRoute>
    }
  />
  <Route
  path="/public"
  element={
    <ProtectedRoute token={token} redirectTo="/">
      <PublicIssues />
    </ProtectedRoute>
  }
/>
    </Routes>
    </div>
  )
}

export default App
