import React, { Component } from 'react';
import {connect} from "react-redux";
import Summary from './summary/summary.container.jsx';
import Header from './header/header.jsx';

import './profile.scss';

class Profile extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div className='profile'>
			<Header 
				title={this.props.main.name}
				subtitle={this.props.main.form}
				types={this.props.types}/>
			<div className='content'>	
				<Summary />
			</div>	
		</div>
	}
}

export default Profile;
