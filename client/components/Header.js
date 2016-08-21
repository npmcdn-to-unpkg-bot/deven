import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <header className="row max-1200 space-between y-center">
        <Link to="/">
          <h1 className="row logo y-center">
            deven
            <img src="./images/air-filter.svg"/>
          </h1>
        </Link>

        <img className="open-nav" src="./images/add.svg" alt="open navigation"
          onClick={this.props.navToggle}/>
      </header>
    )
  }
}
