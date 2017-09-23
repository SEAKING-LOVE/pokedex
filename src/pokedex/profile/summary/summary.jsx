import React, { Component } from 'react';

import './summary.scss';

class Summary extends Component {
	constructor(props) {
		super(props);
	}
	renderAbilities() {
		return this.props.abilities.map((ability, index) => {
			return <div key={index}>{ability}</div>
		})
	}
	render() {
		return <div className="summary section">
			<div>
				<div className='title'>Height</div>
				<div className='data'>
					{this.props.height}
				</div>
			</div>
			<div>
				<div className='title'>Weight</div>
				<div className='data'>
					{this.props.weight}
				</div>
			</div>
			<div>
				<div className='title'>Abilities</div>
				<div className='data'>
					{this.renderAbilities()}
				</div>
			</div>
			<div>
				<div className='title'>EV Yield</div>
				<div className='data'>
					{this.props.evYield}
				</div>
			</div>
			<div>
				<div className='title'>Base Happiness</div>
				<div className='data'>
					{this.props.evYield}
				</div>
			</div>
			<div>
				<div className='title'>Catch Rate</div>
				<div className='data'>
					{this.props.catchRate}
				</div>
			</div>
		</div>
	}
}

Summary.defaultProps = {
	height: '',
	weight: '',
	species: '',
	abilities: [],
};

export default Summary;
