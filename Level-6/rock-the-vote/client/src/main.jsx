import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import IssuesProvider from './context/IssuesProvider.jsx'
import UserProvider from './context/UserProvider.jsx'
import CommentProvider from './context/CommentProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <IssuesProvider>
    <UserProvider>
      <CommentProvider>
       <App />
      </CommentProvider>
    </UserProvider>
  </IssuesProvider>
  </Router>
)
