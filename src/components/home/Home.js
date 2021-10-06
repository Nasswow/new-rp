import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Home.css';
import homeBg from '../../images/ETEA-logos_transparent.png';
import MembersList from '../members/MembersList';
import Member from '../member/Member';
import Departments from '../departments/Departments';
import About from '../about/About';
import Bylaw from '../information/Bylaw'
import HomePage from './HomePage';
const Home = () => {
	return (
		<div className='home-container'>
			{/* <img className="home-bg" src={homeBg} alt="homepage" /> */}
			<Switch>
				<Route exact path='/'>
					<HomePage />
				</Route>
				<Route path='/members/:memberId'>
					<Member />
				</Route>
				<Route path='/members'>
					<MembersList />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/bylaw'>
					<Bylaw />
				</Route>
			</Switch>
		</div>
	);
};

export default Home;
