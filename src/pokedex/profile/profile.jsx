import React, { Component } from 'react';
import {connect} from "react-redux";

import TypeBadge from './typeBadge/typeBadge.jsx';

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
	renderSummary() {
		// return <div>
		// 	<p>{JSON.stringify(this.props.types)}</p>
		// 	<p>{JSON.stringify(this.props.general)}</p>
		// 	<p>{JSON.stringify(this.props.minStats)}</p>
		// </div>;
		return <div>
			{this.renderTypes()}
			
		</div>
	}
	renderGeneral() {
		return <table>
			<tbody>
				
			</tbody>
		</table>
	}
	// renderGeneralRows() {
	// 	return this.props.
	// }
	renderTypes() {
		const badges = this.props.types.map((type, index) => {
			return <TypeBadge  key={index} type={type}/>;
		});

		return <div className='types' > {badges} </div>;
	}
	render() {
		return <div className='profile'>
			{this.renderSprite()}
			{this.renderSummary()}
		</div>
	}
}

export default Profile;