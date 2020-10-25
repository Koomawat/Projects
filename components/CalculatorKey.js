import React from 'react'


function CalculatorKey(props) {
	return (
		<button className = {`${props.className}`}
			onClick = {() => props.onClick(props.keyVal)}>
			
			{props.keyVal}{" "}
		</button>
	)
}

export default CalculatorKey
