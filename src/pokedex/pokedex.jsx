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
		console.log("PREOCESSING STYLES")
		if(this.state.initiate === 1) return this.initiatorStage1()
		if(this.state.initiate === 2) return this.initiatorStage2();
		if(this.state.initiate === 3) return this.initiatorStage3();
		if(this.state.initiate === 4) return this.initiatorStage4();
		if(this.state.initiate === 5) return this.initiatorStage5();
		if(this.state.initiate === 6) return this.initiatorStage6();
		return {};
	}
	initiatorStage1() {
		const time = 1000;
		this.refs.initiator.style.transition = `all ${time}ms`;
		this.refs.initiator.className = 'gridContainer stage1';
		setTimeout(() => { this.nextInitiationStage() }, time);
	}
	initiatorStage2() {
		const time = 1500;
		this.refs.initiator.style.transition = `all ${time}ms`;
		this.refs.initiator.className = 'gridContainer stage2';
		setTimeout(() => { this.nextInitiationStage() }, time*1.1);
	}
	initiatorStage3() {
		const time = 1500;
		this.refs.initiator.style.transition = `all ${time}ms`;
		this.refs.initiator.className = 'gridContainer stage3';
		setTimeout(() => { this.nextInitiationStage() }, time*1.1);
	}
	initiatorStage4() {
		const time = 900;
		this.refs.initiator.style.transition = `all ${time}ms`;
		this.refs.initiator.className = 'gridContainer stage4';
		setTimeout(() => { this.nextInitiationStage() }, time*1.1);
	}
	initiatorStage5() {
		const time = 1500;
		this.refs.initiator.style.transition = `all ${time}ms`;
		this.refs.initiator.className = 'gridContainer stage5';
		setTimeout(() => { this.nextInitiationStage() }, time*1.1);
	}
	initiatorStage6() {
		const time = 1500;
		this.refs.initiator.style.transition = `all ${time}ms`;
		this.refs.initiator.className = 'gridContainer stage6';
		setTimeout(() => { this.nextInitiationStage() }, time*1.1);
	}
	render() {
		this.initiatorStyles();

		return <div className='pokedex'>
			<div className='gridContainer stage0'
						ref='initiator'
						onClick={this.nextInitiationStage}>
				<Grid />
			</div>
		</div>;
	}
}

export default Pokedex;
