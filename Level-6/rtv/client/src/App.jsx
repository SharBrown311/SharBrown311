import React, {useContext} from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from "./assets/Page-Components/Navbar"
import Auth from "./assets/Authorization/Auth"
import Profile from './assets/Pages/Profile'
import ProtectedRoute from './assets/Page-Components/ProtectedRoute'
import { UserContext } from './assets/Context/UserProvider'
import IssueDetail from './assets/Issues/IssueDetail'
//import Public from './assets/Pages/Public'
import IssueList from './assets/Issues/IssueList'
function App() {
  const { token, logout } = useContext(UserContext);
  return(
    <div className="App">
    {token && <Navbar logout={logout} />}
    <Routes>
      <Route
        exact path="/"
        element={token ? <Navigate to="/issues" /> : <Auth />}
      />
        <Route
        path="/issues"
        element={
          <ProtectedRoute token={token} redirectTo="/">
            <IssueList />
          </ProtectedRoute>
        }
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
        path="/details/issue/:id"
        element={
          <ProtectedRoute token={token} redirectTo="/">
            <IssueDetail />
          </ProtectedRoute>
        }
      />
      
    </Routes>
  </div>
);
}
export default App

