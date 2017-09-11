import React, { Component } from 'react';
import {connect} from "react-redux";

import './quickview.scss';

class PokemonCell extends Component {
	constructor() {
		super();
	}
	componentWillMount () {

	}
	componentWillReceiveProps() {

	}
	renderSprite() {
		if(!this.props.identifier) return <div>no img selected</div>;
		// const imgPath = `../../assets/images/${this.props.pokemon.main.unique_id}.gif`;
		// console.log(this.props.pokemon.main[0].unique_id, `../../assets/gifs/${this.props.pokemon.main[0].unique_id}.gif`)
		// const img = require(`./${this.props.identifier}.gif`);
		// return <img src={img}/>
		return <img src=''/>
	}
	render() {
		// {this.renderSprite()}
		// 	{JSON.stringify(this.props.pokemon)}	
		return <div className='quickview'>
			quickview
			
		</div>
	}
}

export default PokemonCell;