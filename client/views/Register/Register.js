import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';
import './Register.styl';

export default class Register extends Component {
  constructor(props) {
    super(props);








    this.handleRegisterRequest = e => {
      e.preventDefault();
      const email = encodeURIComponent(document.querySelector('[name="email"]').value),
            username = document.querySelector('[name="username"]').value,
            password = document.querySelector('[name="password"]').value,
            password2 = document.querySelector('[name="password2"]').value;

      const req = new XMLHttpRequest();
      req.onreadystatechange = () => {
        if (req.readyState == 4 && req.status == 200) {
            console.log(req.responseText);
        }
    };
    req.open("POST", 'https://devengin.herokuapp.com/api/accounts/registration/');
    req.setRequestHeader("Content-type", "application/json");
    req.setRequestHeader("Accept", "application/json");
    // req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // req.responseType = 'json';
    req.send(`username=${username}&email=${email}&password=${password}&password2=${password2}`);
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
