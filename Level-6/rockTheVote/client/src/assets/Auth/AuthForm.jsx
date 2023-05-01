import React from 'react'

export default function AuthForm(props) {
  const {
    handleChange,
    handleSubmit,
    btnText,
    errMsg,
    inputs: {
      username,
      password
    }
  } = props
  return (
    <form className="authForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        value={password}
        placeholder="Password"
        onChange={handleChange}
      />
      <p style = {{color: "red" }}className='errMsg'>{errMsg}</p>
      <button>{btnText}</button>
    </form>
  )
}