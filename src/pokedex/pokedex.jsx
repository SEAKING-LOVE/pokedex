import React, { Component } from 'react';
import {connect} from "react-redux";

import './pokedex.scss';
import './sprites.scss';

class App extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount () {
		this.props.fetchAllPokemon();
		this.props.fetchPokemonById('n1');
	}
	renderPkms () {
		return this.props.allPokemon.map((pkm, index) => {
			return this.renderPkm(pkm);
		})
	}
	renderPkm (pkm) {
		return <div key={pkm.unique_id}>
			<i className={`pki ${pkm.unique_id}`}></i>
			<span>{pkm.national_id}</span>
			<span>{pkm.name + pkm.form}</span>
		</div>
	}
	render() {
		// console.log("render", this.props.selectedPokemon);
		return <div className="pokedex">
 			<span>react is working !!! :0</span>
 			{this.renderPkms()}
		</div>;
	}
}

export default App;