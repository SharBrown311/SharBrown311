import React, {useContext} from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from "./assets/Page-Components/Navbar"
import Auth from "./assets/Authorization/Auth"
import Profile from './assets/Pages/Profile'
import IssueList from './assets/Issues/IssueList'
import ProtectedRoute from './assets/Page-Components/ProtectedRoute'
import { UserContext } from './assets/Context/UserProvider'
import { IssueContext } from './assets/Context/IssueProvider'
import Public from './assets/Pages/Public'
function App() {
  const { token, logout } = useContext(UserContext);
  const {issues, issue, addComment, getComments, vote, _id, deleteIssue, editIssue } = useContext(IssueContext)
  return(
    <div className="App">
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
            <Public       {...issue}
            issues = {issues}
            addComment={addComment}
            getComments={getComments}
            vote={vote}
            key={issue._id}
            deleteIssue = {deleteIssue}
            editIssue = {editIssue}  />
          </ProtectedRoute>
        }
      />
      
    </Routes>
  </div>
);
}
export default App
