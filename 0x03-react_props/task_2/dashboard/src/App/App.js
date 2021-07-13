import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App() {
	return (
		<div className="App">
			<Notifications />
			<div>
				<Header />
			</div>
			<hr />
			<div>
				<Login />
			</div>
			<hr />
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
