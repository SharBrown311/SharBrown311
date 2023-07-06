import React from 'react'
import AuthForm from '../Authentication/AuthForm'
import "../App.css"
import Navbar from '../Page-Components/Navbar'

function LoginPage() {
  return (

    <div className = "LoginPage container">
      <Navbar />
      <AuthForm />
    </div>
  )
}

export default LoginPage
