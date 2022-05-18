import React from 'react'
import 'react-circular-progressbar/dist/styles.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

function Rating({ rate }) {
	const percentage = rate * 10
	return (
		<CircularProgressbar
			value={percentage}
			text={`${percentage}%`}
			className="rating"
			background="true"
			styles={buildStyles({
				strokeLinecap: 'round',
				textSize: '30px',
				pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
				textColor: `rgba(62, 152, 199, ${percentage / 100})`,
				trailColor: '#d6d6d6',
				backgroundColor: 'white'
			})}
		/>
	)
}

export default Rating
