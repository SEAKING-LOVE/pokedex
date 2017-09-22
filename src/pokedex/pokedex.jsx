import React, { Component } from 'react';

import Preview from './preview/preview.container.jsx';
import ListView from './listView/listView.container.jsx';

import { Link } from 'react-router';

import './pokedex.scss';

class Pokedex extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div className="pokedex">
			<Link to={`/pokedex/n1`}
				target='_blank'>
				test profile link
			</Link>
			<Preview />
			<ListView />
		</div>
	}
}

export default Pokedex;
