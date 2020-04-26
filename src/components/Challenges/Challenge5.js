import React from 'react';
import './Challenge.css';
import JoinChallengeButton from './../JoinChallengeButton/JoinChallengeButton';

function Challenge5 () {
	const description = 'Watch this short series to learn how music education boosts academic achievement. With the help of Notes for Notes and Brendon Urie of Panic! At The Disco, we’re building studios, mentoring young artists, and rallying the support of festivalgoers to share the power of music with more youth in more communities.';
	const challenge = {
		name: 'Get Inspired',
		startDate: 'Start Date: May 13th, 2020',
		timeRemaining: 'Duration: 1 week',
		description: description,
		pointValue: 1500
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

export default Challenge5;
