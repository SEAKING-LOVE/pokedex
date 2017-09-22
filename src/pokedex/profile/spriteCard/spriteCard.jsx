import React, { Component } from 'react';

import TypeBadge from '../typeBadge/typeBadge.jsx';
import { leadingZeros } from '../../../utils.js';
import './spriteCard.scss';

class SpriteCard extends Component {
	constructor(props) {
		super(props);
	}
	renderHeader() {
		return <div className='header'>
			<div className='name'>{this.props.name}</div>
			<div className='form'>{this.props.form}</div>
		</div>
	}
	renderSprite() {
		return <img
			src={this.props.imgSource}
			alt={`${this.props.name} profile image`}/>
	}
	renderFooter() {
		return <div className='footer'>
			{this.renderNationalNo()}
		</div>
	}
	renderNationalNo() {
		return <div className='nationalNo'>
				{leadingZeros(this.props.nationalNo)}
			</div>;
	}
	renderTypes() {
		return this.props.types.map((type, index) => {
			return <TypeBadge key={index} type={type}/>
		})
	}
	render() {
		return <div className="spriteCard section">
			{this.renderHeader()}
			{this.renderSprite()}
			{this.renderFooter()}
			{this.renderTypes()}
		</div>
	}
}

SpriteCard.defaultProps = {
	name: '',
	form: '',
	nationalNo: 0,
	types: [],
	imgSource: ''
};

export default SpriteCard;
