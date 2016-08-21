import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Layout extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.setState({
      DOM_layout: (() => document.getElementsByClassName('layout')[0])(),
      DOM_openNav: (() => document.querySelector('img.open-nav'))()
    })
  }


  aClick() {
    this.setState({value: this.state.value+1});
    console.log(this.state);
  }

  navToggle() {
    const layout = this.state.DOM_layout,
          openNavButton = this.state.DOM_openNav;

    if (layout.classList.contains('nav-open')) {
      layout.classList.remove('nav-open');
      // openNavButton.src = '';
      openNavButton.classList.remove('x')
    } else {
      layout.classList.add('nav-open');
      // openNavButton.src = '';
      openNavButton.classList.add('x')
    }
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

        <Header navToggle={this.navToggle.bind(this)}/>

        {React.cloneElement(this.props.children, {})}
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
