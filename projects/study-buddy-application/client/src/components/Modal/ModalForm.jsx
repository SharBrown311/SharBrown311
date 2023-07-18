import React from "react";
import './Modal.css'


export default function ModalForm(props){
    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        inputs: { username, password },
      } = props;
    return (
        <div id = 'modal' className="popupContainer cd-user-modal" style = {{
            display: 'block', position: "fixed", opacity: '1', zIndex: '11000', left: '50%', marginLeft: '-165px', top: '100px'
        }}>
            <div className="popupHeader cd-user-modal-container">
                <span className="header_title">Login</span>
                <span className="modal_close"><i className="fa fa-times"></i></span>
            </div>
                <section className="popupBody">
                    <div className = "user_login">
                        <form onSubmit={handleSubmit} className="login_form">
                            <label>Username</label>
                            <input
                             type="text"
                             value={username}
                             name="username"
                            onChange={handleChange}
                             className="auth-input"
                                />
                                <br />
                                <label>Password</label>
                                <input type = 'text'
                                value = {password}
                                name = "password"
                                onChange={handleChange}
                                className="auth-input"/>
                                <br />
                                <button className="auth-button">{btnText}</button>
                                <p className = "err-message" style={{ color: "red" }}>{errMsg}</p>
                        </form>
                    </div>
                </section>
        </div>
    )
}