import React, { Component } from 'react';

import { typeColors } from '../../../utils.js';
import './typeBadge.scss';

class SpriteCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: this.props.type.toLowerCase(),
			tooltip: false
		}
		this.revealTooltip = this.revealTooltip.bind(this);
		this.hideTooltip = this.hideTooltip.bind(this);
	}
	typeBadgeStyle() {
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
	revealTooltip() {
		this.setState({
			tooltip: true
		});
	}
	hideTooltip() {
		this.setState({
			tooltip: false
		});
	}
	tooltipStyle() {
		const color = typeColors[this.state.type]();
		return {
			display: this.state.tooltip ? 'flex' : 'none',
			backgroundColor: color
		}
	}
	render() {
		return <div className="typeBadge" style={this.typeBadgeStyle()}
			onMouseOver={this.revealTooltip}
			onMouseOut={this.hideTooltip}>
			<div className='tooltip' style={this.tooltipStyle()}>{this.props.type}</div>
			<img src={this.requireSymbol()} alt={`${this.props.type} type`}/>
		</div>
	}
}

SpriteCard.defaultProps = {
	type: ''
};

export default SpriteCard;
