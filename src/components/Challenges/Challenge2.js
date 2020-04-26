import React from 'react';
import './Challenge.css';
import JoinChallengeButton from './../JoinChallengeButton/JoinChallengeButton';

function Challenge2 () {
	const description = `The CDC recommends wearing cloth face coverings in public settings where other social distancing measures are difficult to maintain (e.g., grocery stores and pharmacies). Get creative and upload your DIY mask photo for some easy points. Bonus: Hashtag #StateFarmCommunity on your social media post for an additional 500 points!`;
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
