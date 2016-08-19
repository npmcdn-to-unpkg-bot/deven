import React from 'react';
import './Home.css';

class Home extends React.Component {
  handleButtonClick() {
    alert('clicked');
  }

  render() {
    return (
      <div className="home-page">
        <div className="max-1200 column">
          <div className="brief column x-center">
            <h1>The search engine for developers.</h1>
            <h3>User driven search results, at your service.</h3>
          </div>
          <div className="search column x-center">
            <div className="input">
              <input type="text" placeholder="query deven"/>
              <img src="" alt="search icon"/>
            </div>
            <div className="buttons">
              <button className="filters">filters</button>
              <button className="search">search</button>
              <button className="clear" onClick={this.handleButtonClick}>clear</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
