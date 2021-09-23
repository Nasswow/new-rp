import React from 'react';
import './Input.css';
const Input = props => {
	return (
		<div>
			<input
				placeholder={props.placeholder}
				value={props.value}
				onChange={props.onChange}
				className={`input ${props.className}`}
				ref={props.ref}
			/>
		</div>
	);
};

export default Input;
