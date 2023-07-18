import React from "react";
import '../App.css'


export default function AuthForm(props) {
  const {
    handleChange,
    handleSubmit,
    btnText,
    errMsg,
    inputs: { username, password },
  } = props;

  return (
    <form onSubmit={handleSubmit} className=" Auth-Form auth-login-form">
    
    <input
        type="text"
        value={username}
        name="username"
        onChange={handleChange}
        placeholder="Username"
        className="auth-input"
      />
      
      <input
        type="text"
        value={password}
        name="password"
        onChange={handleChange}
        placeholder="Password"
        className="auth-input"
      />

      <button className="auth-button">{btnText}</button>
      <p className = "err-message" style={{ color: "red" }}>{errMsg}</p>
    </form>
  );
}

