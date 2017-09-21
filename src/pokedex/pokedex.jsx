import React, { Component } from 'react';

// import Frame from './frame/frame.jsx';
// import Grid from './grid/grid.container.jsx';
import ListView from './listView/listView.container.jsx';

import './pokedex.scss';

class Pokedex extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		// return <div className='pokedex'>
		// 	<Frame>
		// 		<Grid />
		// 	</Frame>
		// </div>;
		return <div className="pokedex">
			<ListView />
		</div>
	}
}

export default Pokedex;
