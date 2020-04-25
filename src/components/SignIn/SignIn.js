import React, { Component } from 'react';
import './SignIn.css'

function SignIn () {
		return (
			<div className= 'signIn' >
				<div className="title">Let's get started.</div>
				<input className='input user' type="text" id="fname" name="fname" autofocus required placeholder="User ID" />
				<div className="pw input">
					<input className='password' type="text" id="fname" name="fname" required placeholder="Password" />
					<div className="hide-pw"><i class="fas fa-eye-slash"></i></div>
				</div>
				<hr />
				<div className="trouble">
					<div className="trbl-text">Trouble loggin in?</div>
					<div className="trbl-text">Create account</div>
				</div>
				<div className="login"><strong>Log In</strong></div>
			</div>
		);
}
export default SignIn;
