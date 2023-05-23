import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import UserProvider from './context/UserProvider'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
    <UserProvider> 
  <App />
    </UserProvider>

</Router>   
 </React.StrictMode>
)
