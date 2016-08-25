import React, { Component } from 'react';
import { Link } from 'react-router';
import './NavBar.styl';

export default class NavBar extends Component {
  render() {
    const lefty = (() => {
      if (this.props.loggedIn) {
        const thisUser = this.props.thisUser;
        return (
          <div className="logged-in">
            <p>Welcome, {thisUser.name}</p>
            <div className="user-options">
              <p><Link to="/log-out">Log Out</Link></p>
              <p><Link to="/account">Account</Link></p>
            </div>
          </div>
        )
      } else {
        return (
          <div className="login">
            <p><Link to="/register">REGISTER</Link></p>
            <p><Link to="/login">LOGIN</Link></p>
          </div>
        )
      }
    })();

    return (
      <nav className="component">
        <div className="inner">
          {lefty}
          <div className="logo">
            <p><Link to="/">Deving</Link></p>
          </div>
          <div className="links">
            <p><Link to="/about">ABOUT</Link></p>
            <p><a href="http://www.github.com/colshacol/deven">GITHUB</a></p>
          </div>
        </div>
      </nav>
    )
  }
}
