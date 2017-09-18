import React, { Component } from 'react';
import {connect} from "react-redux";
import Grid from './grid/grid.container.jsx';

import './pokedex.scss';

class Pokedex extends Component {
	constructor(props) {
		super(props);
		this.state = { initiate: 0 }
		this.nextInitiationStage = this.nextInitiationStage.bind(this);
	}
	nextInitiationStage() {
		this.setState({ initiate: this.state.initiate + 1 });
	}
	initiatorStyles() {
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
		return <div className='pokedex'>
			<Grid />
		</div>;
	}
}

export default Pokedex;
