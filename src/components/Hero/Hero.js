import React from 'react';
import logo from './logo.png';
import './Hero.css'

function Hero () {
		return (
			<div className= 'hero' >
				<img src={logo} alt='logo' className='state-farm'/>
				<div className="tagline">Here to help life go right.®</div>
			</div>
		);
}
export default Hero;
