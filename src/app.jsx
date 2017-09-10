import React, { Component } from 'react';
import {connect} from "react-redux";
import * as actions from './actions.js';

import './app.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount () {
		this.props.fetchAllPokemon();
	}
	render() {
		return <div className="">
			<h1>{this.props.data}</h1>
 			<span>react is working !!! :0</span>
		</div>;
	}
}

export default App;