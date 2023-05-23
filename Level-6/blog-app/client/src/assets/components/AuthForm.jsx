import React, { useContext } from 'react'
//props coming in from LoginSignupPage


function AuthForm(props) {
  const {    handleChange, 
    handleSubmit,
    btnText, 
    errMsg, 
    inputs: {username, password}
    } = props

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type = "text"
      value = {username}
      name = "username"
      onChange = {handleChange}
      placeholder='Username'
      className='auth-input'
      />


      <input type='password'
      value = {password}
      name = "password"
      onChange={handleChange}
      placeholder='Password'
      className='auth-input'
      />
      <button className='auth-button' type = "submit" >{btnText}</button>

      <p style={{ color: "red" }}>{errMsg}</p>
    </form>
  )
}

export default AuthForm
