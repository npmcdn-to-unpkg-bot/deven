// This file is where everything begins and ends. It is the
// alpha, the omega, and everything in between.

// We bring in React for obvious reasons, ReactDOM to attach
// our app to the DOM, and select components from React Router
// so that we can set up our general routing right here.

// We also grab the views/components that we will need to use
// in this file. If we do not specifically refer to a certain
// component in this file, we will not need to include it.
// Basically, since we are routing here, we need our views.

// Then we import all the stylesheets we will need throughout
// our app. Alternatively, each stylesheet could be imported by
// the component that it styles, but I find this to be a cleaner
// and more organized practice.

import React from 'react';
import ReactDOM	from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Basic Styles
import './styles/reset.styl';
import './styles/grid.styl';

// View Components
import Layout	from './views/Layout';
import Home from './views/Home';
import SearchHelp from './views/SearchHelp';
import Login from './views/Login';
import Register from './views/Register';

// View Component Styles
import './styles/Layout.styl';
import './styles/Login.styl';
import './styles/Home.styl';

// Component Styles
import './styles/Nav.styl';
import './styles/Header.styl';
import './styles/Search.styl';
import './styles/Tag.styl';
import './styles/Result.styl';


// Here we create our actual router and attach it to the
// DOM, inside of the specified element.

// We create the Router and use it to alter the address
// bar and update the page based on that URL. (browserHistory)
// Then we create the root path Route. In this case it is
// "/" and the component used is Layout.

// Inside of that Route, we have the IndexRoute. Layout is
// the containing route, like a window, if you will. It
// has a specified place inside of it to handle further
// routing. Below you can see that the root route will give
// you the layout with the Home view inside of it, but it
// can change to show other routes inside of the Layout
// "window", as well.

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="/login" component={Login}></Route>
			<Route path="/register" component={Register}></Route>
			<Route path="/search-help" component={SearchHelp}></Route>
			{/* This is a JSX comment. */}
		</Route>
	</Router>,
	document.getElementById('deven')
);
