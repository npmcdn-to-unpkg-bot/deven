import React, { Component } from 'react';
import ReactDOM	from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './index.styl';

// Basic Styles
import './styles/reset.styl';
import './styles/type.styl';
import './styles/grid.styl';
import './styles/forms.styl';
import './styles/buttons.styl';
import './styles/grid.styl';

import NavBar from './comps/NavBar/NavBar';
import Header from './comps/Header/Header';
// import SearchBar from './comps/SearchBar/SearchBar';
// import TagCloud from './comps/TagCloud/TagCloud';

import Home from './views/Home/Home';
import Login from './views/Login/Login.js';

// AppWindow serves as a window for different views.
// The AppWindow holds components that will be present
// in any view, such as the nav and footer.
class AppWindow extends Component {
	constructor() {
		super();
		this.state = {
			loggedIn: false,
			searchTags: []
		};
	};

	render() {
		const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       addSearchTag: this.addSearchTag,
			 removeSearchTag: this.removeSearchTag,
     })
    );

		return (
			<div className="AppWindow component">
				<NavBar />

				{childrenWithProps}

				<footer>
					<h3>Deving.io</h3>
				</footer>
			</div>
		)
	}
}


ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={AppWindow}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="/login" component={Login}></Route>
		</Route>
	</Router>,
	document.getElementById('root')
);
