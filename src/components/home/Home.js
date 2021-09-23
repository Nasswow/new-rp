import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Home.css';
import homeBg from '../../images/ETEA-logos_transparent.png';
import MembersList from '../members/MembersList';
import Member from '../member/Member';
import Departments from '../departments/Departments';
const Home = () => {
	return (
		<div className='home-container'>
			{/* <img className="home-bg" src={homeBg} alt="homepage" /> */}
			<Switch>
				<Route exact path='/'>
					<MembersList />
				</Route>
				<Route path='/members/:memberId'>
					<Member />
				</Route>
				<Route path='/departments'>
					<Departments />
				</Route>
			</Switch>
		</div>
	);
};

export default Home;
