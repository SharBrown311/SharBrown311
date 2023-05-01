import React,  {useState, useContext} from 'react'
import { UserContext } from "../context/UserContextProvider"
import AuthForm from "./AuthForm"

const initInputs = {
  username: "", 
  password: ""
}

export default function Auth(){
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

      const {
        signup, 
        login, 
        logout, 
        resetAuthErr, handleAuthErr, 
        token, 
        errMsg, 
        updatedUser
      } = useContext(UserContext)
     
      function handleChange(e){
        const {name, value} = e.target
        setInputs((prevInputs) => ({
          ...prevInputs,
           [name]: value,
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
        setToggle((prev) => !prev)
        resetAuthErr()
      }
  
  return(
    <div className='auth-container'>
      <div className='auth-wrapper'>
        {" "}
        {toggle ? (
          <>
          <h3>Create your Pronouns & Politics Account</h3>{" "}
          <p>
            Already have an account with Pronouns & Politics?{" "}
            <span className='auth-span' onClick = {toggleForm}>
            {" "} Log in .{" "}
            </span>{" "}
           </p>{" "}
          <AuthForm
            handleChange = {handleChange}
            handleSubmit = {handleSignup}
            inputs = {inputs}
            errMsg = {errMsg}
            btnText = "Create an Account"
          />
          </>
        ) : (
          <>
          <h3>Log in to Pronouns & Politics</h3>{" "}
          <p>
            Don't have an account?{" "}
            <span className = "auth-span">
              Sign Up
            </span>{" "}
          </p>{" "}
          <AuthForm handleChange = {handleChange}
          handleSubmit = {handleLogin} 
          inputs = {inputs}
          errMsg = {errMsg}
          btnText = "Login"
          />
          </>
        )}{" "}
      </div>{" "}
    </div>  
  )
}