import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Header.css';
import logo from '../../images/ETEA-logos_transparent.png';

const Header = props => {
	const isAuth = useSelector(state => state.isAuth);
	const loggedMember = useSelector(state => state.loggedMember);
	const dispatch = useDispatch();

	const logoutHandler = () => {
		dispatch({ type: 'LOGOUT' });
	};
	return (
		<div className='header-container'>
			<div className='header'>
				<div className='header-logo-container'>
					<Link to='/'>
						<img className='logo' src={logo} alt='logo' />
					</Link>
				</div>
				{isAuth && (
					<ul className='header-list-container'>
						<li>
							<Link to='/' className='header-list'>
								Home
							</Link>
						</li>
						<li>
							<Link to='/departments' className='header-list'>
								Departments
							</Link>
						</li>
						<li>
							<Link to='/about' className='header-list'>
								About
							</Link>
						</li>
					</ul>
				)}
				{isAuth && (
					<Link className='logout-link' to='/'>
						<div onClick={logoutHandler} className='header-btn'>
							Logout
						</div>
					</Link>
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
				{/* <div className='greenLine'></div>
				<div className='yellowLine'></div>
				<div className='redLine'></div> */}
			</div>
		</div>
	);
};

export default Header;
