import React, { useState, useContext } from "react";
import LoginSignupForm from "./AuthForm";
import { UserContext } from "../context/UserProvider";


function Auth() {

  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });
  const [toggle, setToggle] = useState(false);
  const { signup, login, errMsg, resetAuthError} = useContext(UserContext)

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value,
    }));
  }


  function handleSignup(e, inputs) {
    e.preventDefault();
    signup(inputs);
  }

  function handleLogin(e, inputs) {
    e.preventDefault();
    login(inputs);
  }

  function toggleForm() {
    setToggle((prev) => !prev);
    resetAuthError();
  }


  return (
    <div className="login-signup-container">
      <h2>Pronouns & Politics</h2>
      {!toggle ? (
        <>
        <LoginSignupForm 
          handleChange = {handleChange}
          handleSubmit = {handleSignup}
          inputs = {inputs}
          btnText = "Register"
          errMsg = {errMsg}
        />
        <p className = "authForm-text" onClick={toggleForm}>
          Are you already Registered?
        </p>
        </>
      ) : (
        <>
        <LoginSignupForm 
          handleChange = {handleChange}
          handleSubmit = {handleLogin}
          inputs = {inputs}
          btnText = "Login"
          errMsg = {errMsg}
        />
        <p className = "authForm-text" onClick={toggleForm}>
          Need to Register?
        </p>
        </>
      )}
    </div>
  )
}

export default Auth
