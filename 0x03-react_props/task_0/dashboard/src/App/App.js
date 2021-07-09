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
			<div className="App-header">
				<Header />
			</div>
			<hr />
			<div className="App-body">
				<Login />
			</div>
			<hr />
			<div className="App-footer">
				<Footer />
			</div>
		</div>
	);
}

export default App;
