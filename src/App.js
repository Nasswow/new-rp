import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Header from './components/header/Header';
import MembersList from './components/members/MembersList';
import Footer from './components/footer/Footer';
import Member from './components/member/Member';
import Home from './components/home/Home';
function App() {
	const isAuth = useSelector(state => state.isAuth);
	return (
		<div className='App'>
			<Header />
			{!isAuth && <Login />}
			{isAuth && <Home />}
			{isAuth && <Footer />}
		</div>
	);
}

export default App;
