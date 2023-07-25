import React, {useState, useContext} from 'react'
import ModalForm from './ModalForm'
import { UserContext } from '../../context/UserProvider'
import "./Modal.css"

const initInputs = {username: '', password: ''}

export default function Modal(){
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const { signup, login, errMsg, resetAuthError } = useContext(UserContext);

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
    resetAuthError();
  }
  return(
    <div id='Modal' className = 'container'>
      <div className='head-container'></div>
        {!toggle ? (
          <>
            <ModalForm
            handleChange = {handleChange}
            handleSignup = {handleSignup}
            inputs = {inputs}
            btnText = "Sign Up"
            errMsg = {errMsg}
            />
            <p className="toggle-text" onClick={toggleForm} style = {{color: "#fff", cursor: 'pointer'}}
          >Already a Member?</p>
          </>
        ) : (
          <>
           <ModalForm
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
            errMsg={errMsg}
          />
          <p className="toggle-text" onClick={toggleForm} style = {{color: "#fff", cursor: 'pointer'}}>Not a member?</p>
        </>
        )}
      
    </div>
  )
}