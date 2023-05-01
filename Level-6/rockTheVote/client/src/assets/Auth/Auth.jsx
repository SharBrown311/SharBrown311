import React, { useState, useContext } from 'react'
import AuthForm from "./AuthForm"
import { UserContext } from '../../context/UserProvider'

const initInputs = { username: "", password: "" }

export default function Auth() {
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const {signup, login, resetAuthError, errMsg} = useContext(UserContext)

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e) {
    e.preventDefault()
    signup(inputs)
  }

  function handleLogin(e) {
    e.preventDefault()
    login(inputs)
  }


  function toggleForm() {
    setToggle(prev => !prev)
    resetAuthError()
  }


  return (
    <div className="auth-container">
      <h1>Vote Yah or Nah!</h1>
      {toggle ?
        <>
          <AuthForm
           className = "authForm"
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign Up"
            errMsg={errMsg}
          />
          <p className='toggleForm' onClick={toggleForm}>Already Signed Up? Login now</p>
        </>
        :
        <>
        <AuthForm
          className="authForm"
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
            errMsg={errMsg}
          />
          <p className='toggleForm'onClick={toggleForm}>Wanna become political?</p>
            </>}
          </div>
  )
}