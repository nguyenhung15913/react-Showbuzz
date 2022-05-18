import React from 'react'
import { Spinner } from 'react-bootstrap'
function Spinners() {
	return (
		<Spinner animation="border" role="status">
			<span className="sr-only">Loading...</span>
		</Spinner>
	)
}

export default Spinners
