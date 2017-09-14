import React, { Component } from 'react';
import {connect} from "react-redux";
import Summary from './summary/summary.container.jsx';

import './profile.scss';

class Profile extends Component {
	constructor(props) {
		super(props);
	}
	renderSprite() {
		return <div>
			<img src={this.props.sprite}/>
		</div>
	}
	render() {
		return <div className='profile'>
			{this.renderSprite()}
			<Summary />
		</div>
	}
}

export default Profile;
