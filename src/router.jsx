import React, { Component } from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Pokedex from './pokedex/pokedex.container.jsx';
import Initiator from './initiator/initiator.jsx';
import Profile from './pokedex/profile/profile.container.jsx';

import Routes from './pokedex.routes.js';
import './index.scss';

class Home extends Component {
	render() {
		return <div className="home">
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
				<Route path={Routes.pokedex.profile().get} component={Profile} />	
			</Route>
		</Router>
	</Provider>	
)

export default Root;