import React, { Component } from 'react';
import {connect} from "react-redux";

import './pokemonCell.scss';
import './sprites.scss';

class PokemonCell extends Component {
	constructor() {
		super();
		// this.props = {
		// 	onClick: () => {},
		// 	pokemon: {},
		// 	expanded: false,
		// 	offsetLeft: 0
		// };
	}
	renderPreview() {
		return <div className='preview' onClick={this.props.onClick}>
				<i className={`pki ${this.props.pokemon.unique_id}`}></i>
				<span>{this.leadingZeros(this.props.pokemon.national_id)}</span>
			</div>
	}
	leadingZeros(num) {
		const size = 3;
		const newNum = '000' + num;
		return newNum.substr(newNum.length - size);
	}
	render() {
		return <div key={this.props.pokemon.unique_id} className='pokemonCell'>
			{this.renderPreview()}		
		</div>
	}
}

export default PokemonCell;