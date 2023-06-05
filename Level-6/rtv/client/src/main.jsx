import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import IssueProvider from './assets/Context/IssueProvider.jsx';
import UserProvider from './assets/Context/UserProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
  <UserProvider>
  <IssueProvider>
    <App />
  </IssueProvider>
  </UserProvider>
</Router>
  </React.StrictMode>,
)
