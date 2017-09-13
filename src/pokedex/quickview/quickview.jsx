import React, { Component } from 'react';
import {connect} from "react-redux";

import './quickview.scss';

class Quickview extends Component {
	constructor(props) {
		super(props);
	}
	renderSprite() {
		return <div>
			<img src={this.props.spriteImage}/>
		</div>
	}
	renderContent() {
		return <div>
			<p>{JSON.stringify(this.props.types)}</p>
			<p>{JSON.stringify(this.props.general)}</p>
			<p>{JSON.stringify(this.props.minStats)}</p>
		</div>;
	}
	render() {
		return <div className='quickview'>
			{this.renderSprite()}
			{this.renderContent()}
		</div>
	}
}

export default Quickview;