import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Home.css';
import MembersList from '../members/MembersList';
import Member from '../member/Member';
import Bylaw from '../information/Bylaw'
import HomePage from './HomePage';
const Home = () => {
	return (
		<div className='home-container'>
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
				<Route path='/bylaw'>
					<Bylaw />
				</Route>
			</Switch>
		</div>
	);
};

export default Home;
