import React, { Component } from 'react';
import {connect} from "react-redux";
import Pokedex from './pokedex/pokedex.container.jsx';

import './app.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { initiate: 0 }
		this.nextInitiationStage = this.nextInitiationStage.bind(this);
	}
	nextInitiationStage() {
		this.setState({ initiate: this.state.initiate + 1 });
	}
	initiatorStyles() {
		console.log("!!!!!!!!!!!!!!!!!!!!!")
		if(this.state.initiate === 1) return this.initiatorStage(2000)
		if(this.state.initiate === 2) return this.initiatorStage(2000);
		if(this.state.initiate === 3) return this.initiatorStage(1500);
		if(this.state.initiate === 4) return this.initiatorStage(1000);
		if(this.state.initiate === 5) return this.initiatorStage(1000);
		if(this.state.initiate === 6) return this.initiatorStage(1000);
		return {};
	}
	initiatorStage(time) {
		this.refs.initiator.style.transition = `all ${time}ms`;
		this.refs.initiator.className = `gridContainer stage${this.state.initiate}`;
		setTimeout(() => { this.nextInitiationStage() }, time * 1.1);
	}
	render() {
		this.initiatorStyles();
		
		return <div className="app">
			<div className='gridContainer stage0' ref='initiator' onClick={this.nextInitiationStage}>
				<Pokedex />
			</div>
		</div>;
	}
}

export default App;