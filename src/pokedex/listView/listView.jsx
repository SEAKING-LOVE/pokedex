import React, { Component } from 'react';

import './listView.scss';

class ListView extends Component {
	constructor(props) {
		super(props);
		this.prevPokemon = this.prevPokemon.bind(this);
		this.nextPokemon = this.nextPokemon.bind(this);
	}
	componentWillMount() {
		// this.props.fetchAllPokemon();
	}
	componentDidMount() {
		// console.log(this.props.all);
	}
	renderPokemonList() {

	}
	nextPokemon() {
		this.props.nextPokemon();
	}
	prevPokemon() {
		this.props.prevPokemon();
	}
	render() {
		console.log(this.props.targetIndex)
		return <div className='listView'>
			<div className='button' onClick={this.prevPokemon}>prev</div>
			<div className='list'>
				pokedex list component
			</div>
			<div className='button' onClick={this.nextPokemon}>next</div>
		</div>;
	}
}

export default ListView;
