import React, { Component } from 'react';
import {connect} from "react-redux";
import Grid from './grid/grid.container.jsx';

import './pokedex.scss';

class Pokedex extends Component {
	constructor(props) {
		super(props);
		this.state = { selected: null, cellSize: 75, cellMargin: 10 };
	}
	render() {
		return <div className='pokedex'>
			<Grid />
		</div>;
	}
}

export default Pokedex;
