import React, { Component } from 'react';
import {connect} from "react-redux";
import Summary from './summary/summary.container.jsx';
import Sprite from './sprite/sprite.container.jsx';
import TypeBadge from './typeBadge/typeBadge.jsx';

import './profile.scss';

class Profile extends Component {
	constructor(props) {
		super(props);
	}
	renderSubname() {
		const form = this.props.main.form === '' ? false : this.props.main.form;
		const species = this.props.general.species;
		return  form ? `${species} | ${form}` : species;
	}
	renderTypes() {
		const badges = this.props.types.map((type, index) => {
			return <TypeBadge  key={index} type={type}/>;
		});

		return <div className='types' > {badges} </div>;
	}
	render() {
		return <div className='profile'>
			<div className='name'>{this.props.main.name}</div>
			<div className='subname'>{this.renderSubname()}</div>
			{this.renderTypes()}
			<div className='content'>
				<Sprite />
				<Summary />
			</div>
				
		</div>
	}
}

export default Profile;
