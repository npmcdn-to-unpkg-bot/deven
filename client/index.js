import React from 'react';
import ReactDOM from 'react-dom';

// Views
// import Home from './views/Home';
import Splash from './views/Splash/Splash.js';
import About from './views/About/About.js';

// Main Components
import Header from './components/Header/Header.js';

import './index.css';

ReactDOM.render(
	<Splash />,
	document.getElementById('deven')
);

ReactDOM.render(
	<Header />,
	document.getElementById('header')
);
