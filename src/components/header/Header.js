import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Header.css';
import logo from '../../images/ETEA-final-logo.png';

const Header = props => {
	const [isCollapsed, setIsCollapsed] = useState(true);
	const isAuth = useSelector(state => state.isAuth);
	const loggedMember = useSelector(state => state.loggedMember);
	const dispatch = useDispatch();

	const logoutHandler = () => {
		dispatch({ type: 'LOGOUT' });
	};
	const linkClickedHandler = () => {
		dispatch({ type: 'CLOSE_FORM' });
	};
	const burgerClickedHandler = () => {
		setIsCollapsed(currentState => !currentState);
	};
	return (
		<div className='header-container'>
			{isAuth && <div className='header'>
				<div className='header-logo-container'>
					<Link to='/'><img
						className='logo'
						src={logo}
						alt='logo'
					/></Link>
					<div onClick={burgerClickedHandler} className='header-burger'>
						<div className='burger-line'></div>
						<div className='burger-line'></div>
						<div className='burger-line'></div>
					</div>

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
								to='/members'
								className='header-list'
							>
								Members
							</Link>
						</li>
						<li>
							<Link
								onClick={linkClickedHandler}
								to='/bylaw'
								className='header-list'
							>
								Bylaw
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
			</div>}
			{!isAuth && (
				<h1 className='header-title'>
					እንኳን ደህና መጡ <br />የኢትዮጵያውያን ትራንዚት ሠራተኞች ማኅበር{' '}
				</h1>
			)}

			<div style={{ padding: '0 20px' }}>
				{isAuth && (
					<div className='member-info'>Welcome, {loggedMember ? loggedMember.toUpperCase() : 'Please sign in'}</div>
				)}
				<div className='greenLine'></div>
				<div className='yellowLine'></div>
				<div className='redLine'></div>
			</div>
		</div>
	);
};

export default Header;
