import React from 'react';
import './Challenge.css';
import JoinChallengeButton from './../JoinChallengeButton/JoinChallengeButton';

function Challenge4 () {
	const description = `It's hard to be without power, internet, or running water. But we know in an emergency anything can happen. Learn the value of having a family emergency plan and building a home emergency kit. Then upload a photo of your new kit and tell us whats the one non-essential item you just can't live without. Bonus: Hashtag #StateFarmCommunity on your social media post for an additional 500 points!`;
	const challenge = {
		name: `Be Prepared`,
		startDate: 'Start Date: May 26th, 2020',
		timeRemaining: 'Duration: 1 week',
		description: description,
		pointValue: 500
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

export default Challenge4;
