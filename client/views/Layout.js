import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Layout extends Component {
  constructor() {
    super();
  }

  aClick() {
    this.setState({value: this.state.value+1});
    console.log(this.state);
  }

  render() {
    return (
      <div className="layout view column x-center">
        <nav className="row x-center">
          <div className="row x-center max-1200">
            <ul className="row max-1200 space-around y-center">
              <li>add resource</li>
              <li>log in</li>
              <li>register</li>
              <li>github</li>
              <li>about</li>
            </ul>
          </div>
        </nav>

        <Header />

        {React.cloneElement(this.props.children, {})}

        <Footer />
      </div>
    )
  }
}



// <div className="intro max-1200 column x-center">
//   <h1>The search <span>en</span>gine for <span>dev</span>elopers.</h1>
//   <h2>User-driven search results, at your service.</h2>
// </div>
//
// <div className="search max-768 column">
//   <div className="row input space-between">
//     <input placeholder="search, by, tags" onKeyUp={this.handleSearchKeyPress} />
//     <img src="./images/search.svg" alt="search icon"/>
//   </div>
//
//   <TagCloud />
// </div>
