// import React from "react";
// import './Auth.css'

import { useNavigate } from "react-router-dom";


export default function AuthForm(props) {
  const {
    handleChange,
    handleSubmit,
    btnText,
    errMsg,
    inputs: { username, password },
  } = props;
  const navigate = useNavigate()
  return (
    <form onSubmit={handleSubmit} className = "Auth-Form auth-login-form">
      
    <label className="username-label">Username   </label>
    <input
        type="text"
        value={username}
        name="username"
        onChange={handleChange}
        className="auth-input"
      />
   
      <label className="password-label">Password</label>
      <input
        type="text"
        value={password}
        name="password"
        onChange={handleChange}
        className="auth-input"
      />

      <button onClick = {() =>{token && navigate('/dashboard')}} className="auth-button">{btnText}</button>
      <p className = "err-message" style={{ color: "red" }}>{errMsg}</p>
      
    </form>
  );
}

