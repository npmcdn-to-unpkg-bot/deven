import React from 'react';
import './Splash.css';

import About from '../About/About.js';

class Splash extends React.Component {
	render( ) {
		return (
			<div className="splash view">
				<h1>Splash Page</h1>
				<About />
			</div>
		)
	}
}

export default Splash;
