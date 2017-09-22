import React, { Component } from 'react';

import './preview.scss';

class Preview extends Component {
	constructor(props) {
		super(props);
	}
	renderTitle() {
		if(!this.props.target) return <div>Loading...</div>;
		return <div>
			Enter {this.props.target.name}
		</div>
	}
	render() {
		console.log("TARGET RENDER", this.props.target);
		return <div className='preview'>
			{this.renderTitle()}
			
		</div>;
	}
}

export default Preview;
