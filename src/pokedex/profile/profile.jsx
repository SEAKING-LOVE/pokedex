import React, { Component } from 'react';

import './profile.scss';

class Profile extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.props.fetchProfile(this.props.params.id);
	}
	render() {
		console.log(this.props.profile)
		return <div className="profile">
			Profile component woo
			{this.props.params.id}
		</div>
	}
}

export default Profile;
