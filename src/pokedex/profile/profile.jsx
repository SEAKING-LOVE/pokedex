import React, { Component } from 'react';

import SpriteCard from './spriteCard/spriteCard.container.jsx';
import Summary from './summary/summary.container.jsx';
import './profile.scss';

class Profile extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.props.fetchProfile(this.props.params.id);
	}
	render() {
		// console.log(this.props.profile)
		return <div className="profile">
			<SpriteCard />
			<Summary />
		</div>
	}
}

export default Profile;
