import React, { Component } from 'react';
import {connect} from "react-redux";
import { typeColors, typesToColors } from '../../../utils.js';

import './sprite.scss';

class Sprite extends Component {
	constructor(props) {
		super(props);
	}
	typeStyles() {
		const types = typesToColors(this.props.types);
		return types.length > 1 ? this.multiType(types) : this.singleType(types[0]);

	}
	multiType(types=[]) {
		const type1 = types[0];
		const type2 = types[1];
		return {
			background: `radial-gradient(circle, ${type1} 10%, ${type2} 25%, #fff 40%)`
		}
	}
	singleType(type) {
		return {
			background: `radial-gradient(circle, ${type} 25%, #fff 40%)`
		}
	}
	render() {
		// const style = this.typeStyles();
		return <div className='sprite'>
			<div className='frame'>
				<img src={this.props.source}/>
			</div>	
		</div>;
	}
}

export default Sprite;
