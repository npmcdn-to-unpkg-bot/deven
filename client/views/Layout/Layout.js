import React from 'react';

import Tag from '../../../components/Tag/Tag.js';

import './Layout.styl';
import './Header.styl';
import './Nav.styl';
import './Search.styl';
import './Tags.styl';

const tags = [
  {
    name: 'express',
    category: 'framework',
  },
  {
    name: 'python',
    category: 'language'
  },
  {
    name: 'tutorial',
    category: 'type'
  }
];

function sliceTag(input) {
  const tag = input.slice(0, input.indexOf(','));
  console.log(tag);
}

class Layout extends React.Component {

  handleSearchKeyPress(e) {
    // sliceTag(e)
    if (e.key == ',') {
      const tag = e.target.value;
      e.target.value = '';
      tags.push({name: tag, category: 'type'});
    }
  }

  render() {
    return (
      <div className="layout box-col x-center">

        <nav className="max-1200">
          <ul>
            <li>
              {/**/}
            </li>
            <li>
              {/**/}
            </li>
          </ul>
        </nav>

        <header className="max-1200 box space-inside y-center">
          <h1 className="logo box y-center">deven<img src="./images/air-filter.svg"/></h1>
          <img className="open-nav" src="./images/add.svg" alt="open navigation"/>
        </header>

        <div className="intro max-1200 box-col x-center">
          <h1>The search <span>en</span>gine for <span>dev</span>elopers.</h1>
          <h2>User-driven search results, at your service.</h2>
        </div>

        <div className="search max-768 box-col">
          <div className="input box space-inside">
            <input placeholder="search, by, tags" onKeyUp={this.handleSearchKeyPress} />
            <img src="./images/search.svg" alt="search icon"/>
          </div>

          <div className="tags box wrap">
            <Tag />
          </div>
        </div>

        {this.props.children}

        <footer className="box x-center">
          <p>This is the footer.</p>
        </footer>
      </div>
    )
  }
}

export default Layout;
