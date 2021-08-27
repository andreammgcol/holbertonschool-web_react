import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => (
    <div className={"Login-body" + css(styles.divMargin)}>
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
	);

const styles = StyleSheet.create({
  divMargin: {
    margin: '50px 0 350px 60px'
  }
});

export default Login;
