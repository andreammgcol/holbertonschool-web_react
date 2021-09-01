import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => (
    <div className={"Login-body" + css(styles.divMargin)}>
      <p>Login to access the full dashboard</p>
      <div id="form">
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

const styles = StyleSheet.create({
  divMargin: {
    margin: '50px 0 350px 60px'
  },
  form: {
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
    }
  },
});

export default Login;
