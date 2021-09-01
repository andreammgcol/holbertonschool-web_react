import React from "react";
import { StyleSheet, css } from 'aphrodite';
import logo from "../assets/holberton_logo.jpg";


const Header = () => (
  <div className={`App-header ` + css(styles.header)}>
    <img className={css(styles.imgSize)} src={logo} alt=""/>
    <h1  className={css(styles.headingColor)}>School dashboard</h1>
  </div>
)

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  imgSize: {
    height: '200px',
  },
  headingColor: {
    color: '#DE284C',
  }
})

export default Header;
