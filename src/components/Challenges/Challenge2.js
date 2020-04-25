import React, { Component } from 'react';
import './Challenge.css';
import JoinChallengeButton from './../JoinChallengeButton/JoinChallengeButton';

function Challenge2 () {

	const description = 'UPLOAD IMAGE dolor sit amet, consectetur adipisicing elit. Recusandae nostrum optio ipsam hic ipsa. Ab iusto voluptatem, harum nemo distinctio! Impedit doloremque, officia vero hic ut repellat fuga obcaecati!';
	const challenge = {
		name: 'The Mask',
		startDate: 'Start Date: April 28th, 2020',
		timeRemaining: 'Duration: 3 weeks',
		description: description,
		pointValue: 2000
	}

		return (
			<div className= 'challenge c-even' >
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

export default Challenge2;
