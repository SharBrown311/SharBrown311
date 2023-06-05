import React, {useState, useContext} from "react"
import { UserContext } from "../../context/UserProvider"
import AuthForm from "./AuthForm"
import "./Auth.css"

const initInputs = {
  username: "", 
  password: ""
}

export default function Auth(){
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)


  const {signup, login} = useContext(UserContext);



  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs, 
      [name]: value
    }))
  }

  function handleSignup(e){
    e.preventDefault()
    signup(inputs)
  }

  function handleLogin(e){
    e.preventDefault()
    login(inputs)

  }

  function toggleForm(){
    setToggle(prev => !prev)
    resetAuthError()
  }
return (
  <div className="Auth">
  <div className="auth-wrapper">
  <h1>Pronouns & Politics</h1>
  {!toggle ? (
    <>
      <AuthForm
        handleChange={handleChange}
        handleSubmit={handleSignup}
        inputs={inputs}
        btnText="Register"
        errMsg={errMsg}
      />
      <p onClick={toggleForm}>Already a Member?</p>
    </>
  ) : (
    <>
      <AuthForm
        handleChange={handleChange}
        handleSubmit={handleLogin}
        inputs={inputs}
        btnText="Login"
        errMsg={errMsg}
      />
      <p onClick={toggleForm}>Not a member?</p>
    </>
  )}
</div>
</div>
  )}