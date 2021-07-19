import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import CourseListRow from '../CourseList/CourseListRow';

function App() {
	return (
		<>
			<Notifications displayDrawer={ true } />
			<div className="App">
				<Header />
			</div >
			<div className="App-body">
				<Login />
				<CourseList />
			</div>
			<div className="App-footer">
				<Footer />
			</div>
		</>
	);
}

export default App;
