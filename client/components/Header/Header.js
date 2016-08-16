import React from 'react';
import './Header.css';

class Header extends React.Component {
	render( ) {
		return (
			<header className="row align-justify align-middle">
				<h1 className="logo">deven<img src="./images/air-filter.svg"/></h1>
				<img className="tiles" src="./images/add.svg" alt="open navigation"/>
			</header>
		)
	}
}

export default Header;
