import React, { Component } from 'react';
import './Login.styl';

export default class Login extends Component {
  render() {
    return (
      <div className="Login view">
        <div className="form">
          <h2>Log In</h2>
          <form>
            <input type="text" name="email"/>
            <input type="password" name="password"/>
          </form>
          <div className="buttons">
            <button className="submit-button">
              SUBMIT
            </button>
            <button className="submit-button">
              HELP
            </button>
          </div>
        </div>
      </div>
    )
  }
}
