import React from 'react';
import './Login.css';

function Login() {
	return (
		<div className="Login">
			<div className="App-body">
				<p>Login to access the full dashboard</p>
				<label htmlFor="email">Email:&nbsp;
					<input type="email"></input>
				</label>
				<label htmlFor="password">&nbsp;Password:&nbsp;
					<input type="password"></input>
				</label>
				&nbsp;
				<button>OK</button>
			</div>
		</div>
	);
}

export default Login;
