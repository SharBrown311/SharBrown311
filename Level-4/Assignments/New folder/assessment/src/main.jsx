import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { UserProvider } from "./assets/UserContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Router>
    <UserProvider>
    <App />
    </UserProvider>
  </Router>
  </StrictMode>
)
