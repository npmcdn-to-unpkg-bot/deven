import React from 'react';
import './Header.css';

const logoIcon = <img src=""/>;

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="max-1200">
          <div className="logo">
            <h1>
              deven
            </h1>
            <img src="./images/logoIcon.svg"/>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
