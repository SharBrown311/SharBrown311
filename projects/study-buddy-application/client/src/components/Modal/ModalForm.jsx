import React from 'react'
import './Modal.css'
function ModalForm(props) {
    const {
        handleChange, 
        handleSubmit, 
        btnText, 
        errMsg,
        inputs: {username, password},
    } = props
  return (
    <form onSubmit={handleSubmit} className='Modal-Form'>
      <label className='username-label'>Username</label>
      <br/>
      <input type = 'text'
      value = {username}
      name = 'username'
      onChange = {handleChange}
      className='modal-input' />
        <br />
      <label className='password-label'>Password</label>
      <br/>
      <input type = 'text'
      value = {password}
      onChange = {handleChange}
      name = 'password'
      className='modal-input' />
      <br />
            <button className="modal-button">{btnText}</button>
      <p className = "err-message" style={{ color: "red", textAlign: "center" }}>{errMsg}</p>
    </form>
  )
}

export default ModalForm
