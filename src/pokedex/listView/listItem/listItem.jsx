import React, { Component } from 'react';

import './listItem.scss';

class ListItem extends Component {
	constructor(props) {
		super(props);
		this.state = { borderWidth: 1, margin: 10 };
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
		const containerOffset = (this.props.containerHeight / 2) - (this.props.totalHeight / 2);
		const targetOffset = this.props.totalHeight * this.props.targetIndex;
		const itemIndexOffset = this.props.totalHeight * this.props.itemIndex;
		const topOffset =  itemIndexOffset - targetOffset + containerOffset;
		return topOffset;
	}
	isTargetNeighbour() {
		return Math.abs(this.props.itemIndex - this.props.targetIndex) === 1;
	}
	setTransform() {
		if(this.props.itemIndex === this.props.targetIndex) return 'scale(1.2)';
		if(this.isTargetNeighbour()) return 'scale(1.1)';
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
	renderText() {
		return <div className='text'>
			<div className='nationalNo'>{this.leadingZeros(this.props.pokemon.national_id)}</div>
			<div className='title'>
				<div className='name'>{this.props.pokemon.name}</div>
				<div className='form'>{this.props.pokemon.form}</div>
			</div>
				
		</div>
	}
	leadingZeros(num) {
		const size = 3;
		const newNum = '000' + num;
		return newNum.substr(newNum.length - size);
	}
	render() {
		return <div className='listItem' style={this.setStyle()}>
			<i className={`pki ${this.props.pokemon.unique_id}`}></i>
			{this.renderText()}
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
