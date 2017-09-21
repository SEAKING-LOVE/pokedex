import React, { Component } from 'react';

import './listItem.scss';

class ListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			borderWidth: 1,
			margin: 10 
		}
	}
	componentWillMount() {
		this.setState({
			height: this.props.totalHeight - (this.state.borderWidth + this.state.margin * 2)
		});
	}
	setBorderRadius() {
		const borderRadius = `${this.state.height / 2}px`;
		return borderRadius;
	}
	setTopOffset() {
		const targetOffset = this.props.totalHeight * this.props.targetIndex
		const topOffset = this.props.totalHeight * this.props.itemIndex - targetOffset;
		return topOffset;
	}
	setTransform() {
		if(this.props.itemIndex === this.props.targetIndex) return 'scale(1.1)';
		return 'scale(1)';
	}
	setStyle() {
		return {
			height: this.state.height,
			margin: `${this.state.margin}px 0`,
			borderWidth: this.state.borderWidth,
			top: this.setTopOffset(),
			borderTopRightRadius: this.setBorderRadius(),
			borderBottomRightRadius: this.setBorderRadius(),
			transform: this.setTransform()
		}
	}
	render() {
		return <div className='listItem' style={this.setStyle()}>
			<i className={`pki ${this.props.pokemon.unique_id}`}></i>
			<div className='nationalNo'>{this.props.pokemon.national_id}</div>
			<div className='name'>{this.props.pokemon.name}</div>
			<div className='form'>{this.props.pokemon.form}</div>
		</div>;
	}
}

ListItem.defaultProps = {
	itemIndex: 0,
	targetIndex: 0,
	totalHeight: 0,
	pokemon: {}
}
export default ListItem;
