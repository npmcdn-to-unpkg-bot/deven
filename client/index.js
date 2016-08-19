import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Views
import Home from './views/Home/Home.js';
// import Splash from './views/Splash/Splash.js';
// import About from './views/About/About.js';

// Components
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

class AppFrame extends React.Component {
	render() {
		return (
			<div className="AppFrame">
				<Header/>
				<Home/>
				<Footer/>
			</div>
		)
	}
}

ReactDOM.render(
	<AppFrame />,
	document.getElementById('deven')
);
