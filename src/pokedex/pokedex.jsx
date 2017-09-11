import React, { Component } from 'react';
import {connect} from "react-redux";
import PokemonCell from './pokemonCell/pokemonCell.jsx';
import Quickview from './quickview/quickview.container.jsx';

import './pokedex.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { selected: null };
	}
	componentWillMount () {
		this.props.fetchAllPokemon();
		this.props.fetchPokemonById('n1', 0);
	}
	renderAllPokemon () {
		return this.props.allPokemon.map((pkm, index) => {
			const selected = index === this.state.selected ? true : false;
			return <div key={pkm.unique_id} ref='cell'>
				<PokemonCell 
					pokemon={pkm} 
					expanded={selected}
					onClick={()=>{this.selectPokemon(pkm.unique_id, index)}}/>
			</div>	
		});
	}
	selectPokemon(id, gridIndex) {
		this.props.fetchPokemonById(id);
		this.setState({ 
			selected: this.state.selected === gridIndex ? null : gridIndex
		})
	}
	render() {
		return <div className='pokedex'>
			<Quickview />
			<div className="grid">
				{this.renderAllPokemon()}
			</div>
		</div>;
	}
}

export default App;