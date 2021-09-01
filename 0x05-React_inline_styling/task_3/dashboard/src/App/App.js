import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';


const listCourses = [
		{ id: 1, name: 'ES6', credit: '60' },
		{ id: 2, name: 'Webpack', credit: '20' },
		{ id: 3, name: 'React', credit: '40' }
];

const listNotifications = [
	{ id: 1, type: 'default', value: 'New course available' },
	{ id: 2, type: 'urgent', value: 'New resume available' },
	{ id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.logoutListener = this.logoutListener.bind(this);
  	}

	logoutListener(event) {
		if (event.ctrlKey && event.key === 'h') {
			alert('Logging you out');
			this.props.logOut();
    	}
	}

	componentDidMount() {
		if (typeof window === 'object') {
			document.addEventListener("DomContentLoader", function () {
				('keydown', this.logoutListener);
			});
		}
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.logoutListener);
	}

	render () {
		const { isLoggedIn } = this.props;
		return (
		<>
			<Notifications displayDrawer={true} isLoggedIn={this.props.isLoggedIn} listNotifications={listNotifications} />
			<div className="App">
				<Header />
			</div>
			<hr style= {{ border: '2px solid #DE284C' }}/>
			<div className="App-body">
			{
				(isLoggedIn === true)
					? <BodySectionWithMarginBottom title={'Course list'}>
						<CourseList listCourses={listCourses} />
					</BodySectionWithMarginBottom>
					: <BodySectionWithMarginBottom title={'Log in to continue'}>
						<Login />
					</BodySectionWithMarginBottom>
			}
			<BodySection title={'News from the School'} >
          		<p>Some random text</p>
			</BodySection>
			</div>
			<hr style= {{ border: '2px solid #DE284C' }}/>
			<div className="App-footer">
				<Footer />
			</div>
		</>
		);
	}
}

App.defaultProps = {
	isLoggedIn: false,
	logOut: () => {}
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
	logOut: PropTypes.func
};

const styles = StyleSheet.create({
	body: {

	},
	footer: {

	}
})

export default App;
