import React, { Component } from 'react';
import {connect} from "react-redux";
import { typeColors } from '../../../utils.js';

import './typeBadge.scss';

class TypeBadge extends Component {
	typeStyles() {
		const type = this.props.type.toLowerCase();
		const color = typeColors[type];
		return {
			backgroundColor: color,
			boxShadow: `0 0 0 0.1em ${color}`
		}
	}
	render() {
		const style = this.typeStyles();
		return  <div className='typeBadge' style={style}>
			{this.props.type}
		</div>;
	}
}

export default TypeBadge;
