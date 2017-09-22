import React, { Component } from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Pokedex from './pokedex/pokedex.container.jsx';
import Initiator from './initiator/initiator.jsx';
import TestProfile from './testprofile.jsx';

import Routes from './pokedex.routes.js';
import './app.scss';

class Home extends Component {
	render() {
		return <div className="app">
			<Initiator />
			<Pokedex />
		</div>;
	}
}

class App extends Component {
	render() {
		return <div className="app">
			{this.props.children}
		</div>;
	}
}

const Root = ({ store }) => (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Home}></IndexRoute>
				<Route path={Routes.pokedex.profile().get} component={TestProfile} />	
			</Route>
		</Router>
	</Provider>	
)

export default Root;