import React, { Component } from 'react';
import { Link } from 'react-router';
import './NavBar.styl';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="component">
        <div className="inner">
          <div className="login">
            <p><Link to="/register">REGISTER</Link></p>
            <p><Link to="/login">LOGIN</Link></p>
          </div>
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
