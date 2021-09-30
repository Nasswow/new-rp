import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Header.css';
import logo from '../../images/ETEA-logos_transparent.png';

const Header = props => {
	const [isCollapsed, setIsCollapsed] = useState(true);
	const isAuth = useSelector(state => state.isAuth);
	const loggedMember = useSelector(state => state.loggedMember);
	const dispatch = useDispatch();

	const logoutHandler = () => {
		dispatch({ type: 'LOGOUT' });
	};
	const linkClickedHandler = () => {
		console.log('link clicked');

		dispatch({ type: 'CLOSE_FORM' });
	};
	const logoClickedHandler = () => {
		console.log('logo clicked handler');
		if (window.innerWidth > 700) {
			return;
		}
		setIsCollapsed(currentState => !currentState);
	};
	return (
		<div className='header-container'>
			<div className='header'>
				<div className='header-logo-container'>
					<img
						onClick={logoClickedHandler}
						className='logo'
						src={logo}
						alt='logo'
					/>
				</div>
				{isAuth && (
					<ul
						className={
							isCollapsed
								? 'header-list-container collapsed'
								: 'header-list-container'
						}
					>
						<li>
							<Link onClick={linkClickedHandler} to='/' className='header-list'>
								Home
							</Link>
						</li>
						<li>
							<Link
								onClick={linkClickedHandler}
								to='/departments'
								className='header-list'
							>
								Departments
							</Link>
						</li>
						<li>
							<Link
								onClick={linkClickedHandler}
								to='/about'
								className='header-list'
							>
								About
							</Link>
						</li>
						<li>
							<Link
								onClick={linkClickedHandler}
								to='/more'
								className='header-list'
							>
								More
							</Link>
						</li>

						{isAuth && (
							<div onClick={logoutHandler} className='header-btn'>
								<Link
									onClick={linkClickedHandler}
									className='logout-link'
									to='/'
								>
									Logout
								</Link>
							</div>
						)}
					</ul>
				)}
			</div>
			{!isAuth && (
				<h1 className='header-title'>
					Ethiopian Transit Employees Association{' '}
				</h1>
			)}

			<div style={{ padding: '0 20px' }}>
				{isAuth && (
					<div className='member-info'>Welcome, {loggedMember} 😀</div>
				)}
				<div className='greenLine'></div>
				<div className='yellowLine'></div>
				<div className='redLine'></div>
			</div>
		</div>
	);
};

export default Header;
