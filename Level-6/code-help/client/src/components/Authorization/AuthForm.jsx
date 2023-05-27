import React from 'react'

function AuthForm() {

  //props coming in from Auth
  const {handleChange, handleSubmit, btnText, errMsg, inputs: {username, password}, } = props



  return (
    <form onSubmit={handleSubmit}>
      
    <input type = "text"
    value = {username}
    name = "username"
    onChange={handle}
    placeholder='Username'
    />

    <input type = "password"
      value = {password}
      name = "password"
      onChange={handleChange}
      placeholder='Password'
      />

      <button>{btnText}</button>
      <p style={{color: "red"}}>{errMsg}</p>
    </form>
  )
}

export default AuthForm
