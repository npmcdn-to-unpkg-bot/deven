import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import tags from '../data/tags';
import resources from '../data/resources';

export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      value: 45,
      activeTags: []
    }
  }

  addActiveTag(tag) {
    // const activeTags = this.state.activeTags;
    // activeTags.push(tag);
    this.setState({activeTags: this.state.activeTags.push(tag)});
  }

  aClick() {
    this.setState({value: this.state.value+1});
    console.log(this.state);
  }

  render() {
    return (
      <div className="layout view column x-center">
        <Header />
        {React.cloneElement(this.props.children, {
          activeTags: this.state.activeTags
        })}
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
