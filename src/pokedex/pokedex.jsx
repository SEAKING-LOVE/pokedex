import React, { Component } from 'react';
import {connect} from "react-redux";
import PokemonCell from './pokemonCell/pokemonCell.jsx';

import './pokedex.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { selected: null, cellSize: 65, cellMargin: 5 };
	}
	componentWillMount () {
		this.props.fetchAllPokemon();
	}
	renderAllPokemon () {
		return this.props.allPokemon.map((pkm, index) => {
			return this.renderCell(pkm, index);
		});	}
	renderCell(pkm, index) {
		const selected = index === this.state.selected ? true : false;

		const rowLength = this.cellsPerRow();
		const colIndex = index % rowLength;

		const cellWidth = this.state.cellSize + this.state.cellMargin * 2;
		const offsetLeft = cellWidth * colIndex;

		const gridWidth = this.refs.grid.clientWidth;
		const expandWidth = rowLength * cellWidth;

		return <PokemonCell 
			key={pkm.unique_id} 
			pokemon={pkm} 
			size={this.state.cellSize}
			margin={this.state.cellMargin}
			offsetLeft={offsetLeft}
			selected={selected}
			expandWidth={expandWidth}
			onClick={()=>{this.selectPokemon(pkm.unique_id, index)}}/>
	}
	
	cellsPerRow() {
		if(!this.refs.grid) return 0;
		const gridWidth = this.refs.grid.clientWidth;
		const cellWidth = this.state.cellMargin * 2 + this.state.cellSize;
		return Math.floor( gridWidth / cellWidth );
	}
	selectPokemon(id, gridIndex) {
		const selected = this.state.selected === gridIndex ? null : gridIndex;

		this.props.fetchProfile(id)
			.then(() => {
				this.setState({  selected })
			})		
	}
	updateGridWidth() {
		const rowLength = this.cellsPerRow();
		const cellSize = this.state.cellSize + this.state.cellMargin * 2;
		const gridWidth = rowLength * cellSize;
		
		const newStyle = { width: gridWidth };
		const defaultStyle = { width: '100%' };

		return gridWidth > 0 ? newStyle : defaultStyle ;
	}
	render() {
		const style = this.updateGridWidth();

		return <div className='pokedex'>
			<div className="grid" ref='grid'>
				{this.renderAllPokemon()}
			</div>
		</div>;
	}
}

export default App;