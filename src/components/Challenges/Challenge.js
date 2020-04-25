import React, { Component } from 'react';
import './Challenge.css';
import JoinChallengeButton from './../JoinChallengeButton/JoinChallengeButton';

function Challenge () {

	const description = 'GEOFENCING sit amet, consectetur adagdfafd a sdf afasd asf af ipisicing elit. Recusandae nostrum optio ipsam hic ipsa. Ab iusto voluptatem, harum nemo distinctio! Impedit doloremque, officia vero hic ut repellat fuga obcaecati!';
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
