import React, { Component } from 'react';
import { Link } from 'react-router';

import './preview.scss';

class Preview extends Component {
	constructor(props) {
		super(props);
	}
	renderProfileLink() {
		if(!this.props.target) return this.renderLoading();
		return <Link to={`/pokedex/${this.props.target.unique_id}`} target='_blank'>
			<span>Enter</span>
			<span className='name'>{this.props.target.name}</span>
			<span className='form'>{this.props.target.form}</span>
		</Link>
	}
	renderLoading() {
		return <div>Loading...</div>;
	}
	render() {
		return <div className='preview'>
			{this.renderProfileLink()}			
		</div>;
	}
}

export default Preview;
