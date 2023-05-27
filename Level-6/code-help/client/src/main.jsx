import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'


//importing all the providers to wrap around the app element

import IssueProvider from './context/IssueProvider.jsx'
import UserProvider from './context/UserProvider.jsx'
import CommentProvider from './context/CommentProvider.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <IssueProvider>
  <UserProvider>
  <CommentProvider>
  <App />
  </CommentProvider>
  </UserProvider>
  </IssueProvider>

  </Router>
)
