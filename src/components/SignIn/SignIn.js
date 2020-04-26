import React from 'react';
import './SignIn.css'

function SignIn ({onRouteChange}) {
		return (
			<div className= 'signIn' >
				<div className="si-title">Let's get started.</div>
				<input className='input user' type="text" id="fname1" name="fname" autoFocus required placeholder="User ID" />
				<div className="pw input">
					<input className='password' type="text" id="fname2" name="fname" required placeholder="Password" />
					<div className="hide-pw"><i className="fas fa-eye-slash"></i></div>
				</div>
				<hr />
				<div className="trouble">
					<div className="trbl-text">Trouble loggin in?</div>
					<div className="trbl-text">Create account</div>
				</div>
				<input onClick={() => onRouteChange('profile')} type="submit" value="Log In" className="login"/>
			</div>
		);
}
export default SignIn;
