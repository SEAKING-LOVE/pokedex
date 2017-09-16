import React, { Component } from 'react';
import TypeBadge from '../typeBadge/typeBadge.jsx';
import './header.scss';

class Header extends Component {
	renderTypes() {
		const badges = this.props.types.map((type, index) => {
			return <TypeBadge  key={index} type={type}/>;
		});
		return <div className='types'> {badges} </div>;
	}
	render() {
		return <div className='header'>
			<div className='title'>{this.props.title}</div>
			<div className='subtitle'>{this.props.subtitle}</div>
			{this.renderTypes()}				
		</div>
	}
}

export default Header;
