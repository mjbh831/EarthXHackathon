import React from 'react';
import logo from './../Hero/logo.png';
import chart from './chart.png';
import './Profile.css'

function Profile ({onRouteChange}) {
		return (
			<div className= 'profile' >
				<div className="title" >
					<img onClick={() => onRouteChange('home')} src={logo} alt='logo' className='sfLogo'/>
					<div className="user-info">
						<div className="user-points">11,220</div>
						<div className="pic"><i className="fas fa-user"></i></div>
					</div>
				</div>
				<div className="info">Hi, User<br/>Next Savings Milestone: <strong>17,000</strong></div>
				<img src={chart} alt='chart' className='chart'/>
				<div className="info">Welcome to the State Farm Community Challenge page.
				 Here you can see available challenges, check your current score, and keep track of your progress as you earn
				  your way to major savings!</div>
				  <div className="star">
				  	<i className="fas fa-star"></i>
				  	<i className="fas fa-star"></i>
				  	<i className="fas fa-star"></i>
				  </div>
				  <div className="learn">Learn More</div>
			</div>
		);
}
export default Profile;
