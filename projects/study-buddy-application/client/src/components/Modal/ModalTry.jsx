import React from 'react'
import "./Modal.css"
import './modalQuery'
export default function ModalTry(){
  return (
		<div className='overlay'>	<div className="cd-user-modal"> 
		<div className="cd-user-modal-container"> 
			<ul className="cd-switcher">
				<li><a href="#0">Sign in</a></li>
				<li><a href="#0">New account</a></li>
			</ul>

			<div id="cd-login"> 
				<form className="cd-form">
					<p className="fieldset">
						<label className="image-replace cd-email" for="signin-email">E-mail</label>
						<input className="full-width has-padding has-border" id="signin-email" type="email" placeholder="E-mail"/>
						<span className="cd-error-message">Error message here!</span>
					</p>

					<p className="fieldset">
						<label className="image-replace cd-password" for="signin-password">Password</label>
						<input className="full-width has-padding has-border" id="signin-password" type="text"  placeholder="Password"/>
						<a href="#0" className="hide-password">Hide</a>
						<span className="cd-error-message">Error message here!</span>
					</p>

					<p className="fieldset">
						<input type="checkbox" id="remember-me" checked/>
						<label for="remember-me">Remember me</label>
					</p>

					<p className="fieldset">
						<input className="full-width" type="submit" value="Login"/>
					</p>
				</form>
				
	
				 <a href="#0" className="cd-close-form">Close</a>
			</div> 

			<div id="cd-signup">
				{/* sign up form */}
				<form className="cd-form">
					<p className="fieldset">
						<label className="image-replace cd-username" for="signup-username">Username</label>
						<input className="full-width has-padding has-border" id="signup-username" type="text" placeholder="Username"/>
						<span className="cd-error-message">Error message here!</span>
					</p>

					<p className="fieldset">
						<label className="image-replace cd-email" for="signup-email">E-mail</label>
						<input className="full-width has-padding has-border" id="signup-email" type="email" placeholder="E-mail"/>
						<span className="cd-error-message">Error message here!</span>
					</p>

					<p className="fieldset">
						<label className="image-replace cd-password" for="signup-password">Password</label>
						<input className="full-width has-padding has-border" id="signup-password" type="text"  placeholder="Password" />
						<a href="#0" className="hide-password">Hide</a>
						<span className="cd-error-message">Error message here!</span>
					</p>

					<p className="fieldset">
						<input type="checkbox" id="accept-terms" />
						<label for="accept-terms">I agree to the <a href="#0">Terms</a></label>
					</p>

					<p className="fieldset">
						<input className="full-width has-padding" type="submit" value="Create account" />
					</p>
				</form>

				<a href="#0" className="cd-close-form">Close</a> 
			</div> 

			<div id="cd-reset-password">
				<p className="cd-form-message">Lost your password? Please enter your email address. You will receive a link to create a new password.</p>

				<form className="cd-form">
					<p className="fieldset">
						<label className="image-replace cd-email" for="reset-email">E-mail</label>
						<input className="full-width has-padding has-border" id="reset-email" type="email" placeholder="E-mail" />
						<span className="cd-error-message">Error message here!</span>
					</p>

					<p className="fieldset">
						<input className="full-width has-padding" type="submit" value="Reset password" />
					</p>
				</form>

				<p className="cd-form-bottom-message"><a href="#0">Back to log-in</a></p>
			</div> 
			<a href="#0" className="cd-close-form">Close</a>
		</div> 
	</div>
	</div> 
  )
}