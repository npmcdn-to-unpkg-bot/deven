import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './LogOut.styl';

export default class LogOut extends Component {
  constructor(props) {
    super(props);

    this.logOut = () => {
      this.props.logOut();
      setTimeout(() => {
        browserHistory.push('/');
      }, 1500);
    }
  }

  componentDidMount() {
    this.logOut();
  }

  render() {
    return (
      <div className="LogOut view">
        <div className="inner">
          <h3>Logging you out of Deving.</h3>
        </div>
      </div>
    )
  }
}
