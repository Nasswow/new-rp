import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './login.css';
import { Button } from '../UI/Button';
import Input from '../UI/Input';
const Login = () => {
	const members = useSelector(state => state.members);
	const memberNames = members.map(member => member.name);
	const dispatch = useDispatch();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const usernameChangeHandler = e => {
		setUsername(e.target.value);
		setErrorMessage('');
	};
	const passwordChangeHandler = e => {
		setPassword(e.target.value);
		setErrorMessage('');
	};
	const loginHandler = e => {
		e.preventDefault();
		if (
			username.trim().length === 0 ||
			!memberNames.includes(username.trim())
		) {
			setErrorMessage('Your username is not valid');
			return;
		} else if (password.trim().length < 6) {
			setErrorMessage('Your Password is not Valid');
			return;
		} else if (password === 'admin123') {
			dispatch({ type: 'ADMIN_LOGIN', payload: username });
			return;
		} else {
			dispatch({ type: 'MEMBER_LOGIN', payload: username });
		}
		setUsername('');
		setPassword('');
	};
	return (
		<div className='login-container'>
			<form className='login-form'>
				<div className='login-input-container'>
					<div className='login-label-input-container'>
						<Input
							placeholder='Enter Your Username'
							value={username}
							onChange={usernameChangeHandler}
							className='login-input'
						/>
					</div>
					<div>
						<Input
							placeholder='Enter Your Password'
							value={password}
							onChange={passwordChangeHandler}
							className='login-input'
						/>
					</div>
					<div style={{ color: 'red' }}>{errorMessage}</div>
					<Button
						onClick={loginHandler}
						className='login-btn'
						type='submit'
						value='Login'
					/>
					<span>Not a member ? Call us to JOIN at 206 XXX XXXX.</span>
				</div>
			</form>
		</div>
	);
};

export default Login;
