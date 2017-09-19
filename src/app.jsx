import React, { Component } from 'react';
import {connect} from "react-redux";
import Pokedex from './pokedex/pokedex.container.jsx';
import Initiator from './initiator/initiator.jsx';

import './app.scss';

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div className="app">
			<Pokedex />
			<Initiator />			
		</div>;
	}
}

export default App;