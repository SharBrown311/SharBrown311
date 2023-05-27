import React, {useState, useContext} from 'react'
import AuthForm from './AuthForm'
import { UserContext } from '../../context/UserProvider'
export default function Auth() {

  const initInputs = {
    username: "", 
    password: ""
  };

  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const {signup, login, errMsg, resetAuthErr} = useContext(UserContext)

  
  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSignup(e) {
    e.preventDefault();
    signup(inputs);
  }

  function handleLogin(e) {
    e.preventDefault();
    login(inputs);
  }

  function toggleForm() {
    setToggle((prev) => !prev);
    resetAuthErr();
  }

  return (
    <div className='auth-container'>
      <h1>Title of Application</h1>
      {!toggle ? (
        <>
        <AuthForm
        handleChange = {handleChange}
        handleSubmit = {handleSignup}
        inputs = {inputs}
        btnText = "Register"
        errMsg = {errMsg}
        />
        <p onClick={toggleForm}>Need to Log In? </p>
        </>

      ) : (
        <>
        <AuthForm 
        handleChange = {handleChange}
        handleSubmit = {handleLogin}
        inputs = {inputs}
        btnText = "Login"
        errMsg = {errMsg}
        />
        <p onClick = {toggleForm}>Need to Sign up?</p>
        </>
      )}
    </div>
  )
}


