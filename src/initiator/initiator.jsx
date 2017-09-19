import React, { Component } from 'react';
import {connect} from "react-redux";

import './initiator.scss';

class App extends Component {
	constructor() {
		super();
		this.state = { initiate: 0 }
		this.nextInitiationStage = this.nextInitiationStage.bind(this);
	}
	nextInitiationStage() {
		this.setState({ initiate: this.state.initiate + 1 });
	}
	initiatorStyles() {
		if(this.state.initiate === 1) return this.initiatorStage(1000)
		if(this.state.initiate === 2) return this.initiatorStage(2000);
		if(this.state.initiate === 3) return this.initiatorStage(1500);
		if(this.state.initiate === 4) return this.initiatorStage(1000);
		return {};
	}
	initiatorStage(time) {
		this.refs.initiator.style.transition = `all ${time}ms`;
		this.refs.initiator.className = `initiator stage${this.state.initiate}`;
		setTimeout(() => { this.nextInitiationStage() }, time * 1.05);
	}
	render() {
		this.initiatorStyles();
		
		return <div className='initiator stage0' ref='initiator'>
			<div className='initiatorButton' onClick={this.nextInitiationStage}></div>
			<div className='top'></div>
			<div className='bottom'></div>
			<div className='center'></div>
		</div>;
	}
}

export default App;