import React, { Component } from 'react';
import {connect} from "react-redux";
import Pokedex from './pokedex/pokedex.container.jsx';

import './app.scss';

class App extends Component {
	render() {
		return <div className="app">
			<Pokedex />
		</div>;
	}
}

export default App;