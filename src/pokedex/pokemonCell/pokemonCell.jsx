import React, { Component } from 'react';
import {connect} from "react-redux";
// import Quickview from '../quickview/quickview.jsx';
import Quickview from '../quickview/quickview.container.jsx';
import './pokemonCell.scss';
import './sprites.scss';

// this.props = {
// 	onClick: () => {},
// 	pokemon: {},
// 	size: 0,
// 	margin: 0,
// 	selected: false,
// 	offsetLeft: 0,
// 	expandWidth: 0,
// 	offsetLeft: 0
// };

class PokemonCell extends Component {
	renderPreview() {
		return <div 
			className={`preview ${this.props.selected ? 'active' : ''}`}
			onClick={this.props.onClick}>
				<i className={`pki ${this.props.pokemon.unique_id}`}></i>
				<span>{this.leadingZeros(this.props.pokemon.national_id)}</span>
			</div>	
	}
	renderQuickview() {
		const style = {
			left: `-${this.props.offsetLeft}px`,
			width: this.props.expandWidth
		};

		return <div 
			className={`quickviewContainer ${this.props.selected ? 'expanded' : ''}`}
			style={style}>
			<Quickview pokemon={this.props.pokemon}/>
		</div>
	}
	leadingZeros(num) {
		const size = 3;
		const newNum = '000' + num;
		return newNum.substr(newNum.length - size);
	}
	cellContainerStyle() {
		return {
			width: `${this.props.size}px`,
			width: `${this.props.size}px`,
			margin: `${this.props.margin}px`
		};
	}
	render() {
		const style=this.cellContainerStyle();

		return <div key={this.props.pokemon.unique_id} className='pokemonCell' style={style}>
			{this.renderPreview()}
			{this.renderQuickview()}
		</div>
	}
}

export default PokemonCell;