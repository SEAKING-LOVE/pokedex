import React, { Component } from 'react';

import { typeColors } from '../../../utils.js';
import './typeBadge.scss';

class SpriteCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: this.props.type.toLowerCase()
		}
	}
	setStyle() {
		const color = typeColors[this.state.type]();
		return {
			backgroundColor: color
		}
	}
	requireSymbol() {
		if(type === '') return '';
		const type = this.state.type;
		return require(`./symbols/${type}.png`);
	}
	render() {
		return <div className="typeBadge" style={this.setStyle()}>
			<img
			src={this.requireSymbol()}
			alt=""/>
		</div>
	}
}

SpriteCard.defaultProps = {
	type: ''
};

export default SpriteCard;
