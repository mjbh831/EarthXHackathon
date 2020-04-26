import React from 'react';
import './Challenge.css';
import JoinChallengeButton from './../JoinChallengeButton/JoinChallengeButton';

function Challenge () {
	const description = `There's no place like home! And State Farm is rewarding those who are staying put and avoiding public places during the COVID-19 pandemic. This challenge uses geo-fencing technology on your mobile device to track time away from home. Who said you couldn't save money just sitting on the couch?`
		const challenge = {
		name: 'Home Base',
		startDate: 'Start Date: May 1st, 2020',
		timeRemaining: 'Duration: 2 weeks',
		description: description,
		pointValue: 3500
	}

		return (
			<div className= 'challenge c-odd' >
				<div className="name-pts">
					<p id='chal-name'>{challenge.name}</p>
					<p id='point-value'>Point value: {challenge.pointValue}</p>
				</div>
				<div className="desc">
					<div className="chal-desc">{challenge.description}</div>
					<JoinChallengeButton />
					<div className="chal-specs">	
						<div className="startDate">
							{challenge.startDate}
						</div>
						<div className="time-remaing">
							{challenge.timeRemaining}
						</div>
					</div>
				</div>
			</div>
		);
}

export default Challenge;
