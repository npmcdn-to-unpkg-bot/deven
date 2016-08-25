import React, { Component } from 'react';
import './Register.styl';

export default class Register extends Component {
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
            <input type="password" name="verify password" placeholder="verify password"/>
          </form>
          <div className="buttons">
            <button className="submit-button">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    )
  }
}
