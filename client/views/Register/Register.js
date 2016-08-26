import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './Register.styl';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegisterRequest = e => {
      e.preventDefault();
      browserHistory.push('/');
      const email = document.querySelector('[name="email"]').value,
            username = document.querySelector('[name="username"]').value,
            password = document.querySelector('[name="password"]').value,
            password2 = document.querySelector('[name="password2"]').value;

      console.log(email);
      console.log(username);
      console.log(password);
      console.log(password2);
    }
  }

  render() {
    return (
      <div className="Register view">
        <div className="form">
          <h2>Register</h2>
          <p>
            Want to be able to submit new resources,
            vote on resources you like, and be a part
            of the Deving community?
          </p>
          <form>
            <input type="text" name="email" placeholder="email"/>
            <input type="text" name="username" placeholder="username"/>
            <input type="password" name="password" placeholder="password"/>
            <input type="password" name="password2" placeholder="verify password"/>
            <button className="submit-button" onClick={this.handleRegisterRequest}>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    )
  }
}
