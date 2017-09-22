import React, { Component } from 'react';
import Preview from './preview/preview.container.jsx';
import ListView from './listView/listView.container.jsx';

import './pokedex.scss';

class Pokedex extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div className="pokedex">
			<Preview />
			<ListView />
		</div>
	}
}

export default Pokedex;
