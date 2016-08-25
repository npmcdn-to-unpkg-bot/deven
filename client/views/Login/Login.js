import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './Login.styl';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = () => {
      const res = true;
      const userObj = {
        name: 'timmy',
        age: 49
      }
      if (res) {
        this.props.logInSuccess(userObj);
        browserHistory.push('/');
      } else {
        this.logInFail();
      }
    }
  }

  render() {
    return (
      <div className="Login view">
        <div className="form">
          <h2>Log In</h2>
          <form>
            <input type="text" name="username" placeholder="username"/>
            <input type="password" name="password" placeholder="password"/>
          </form>
          <div className="buttons">
            <button className="submit-button" onClick={this.handleLogin}>
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
