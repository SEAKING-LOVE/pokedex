import React, { Component } from 'react';

import Frame from './frame/frame.jsx';
import Grid from './grid/grid.container.jsx';

import './pokedex.scss';

class Pokedex extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div className='pokedex'>
			<Frame>
				<Grid />
			</Frame>
		</div>;
	}
}

export default Pokedex;
