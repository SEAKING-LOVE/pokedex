import React, { Component } from 'react';

class ListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			borderWidth: 1,
			margin: 5 
		}
	}
	setStyle() {
		const height = this.props.totalHeight - (this.state.borderWidth + this.state.margin * 2);
		const targetOffset = this.props.totalHeight * this.props.targetIndex
		const topOffset = this.props.totalHeight * this.props.itemIndex - targetOffset;
		return {
			height: height,
			margin: `${this.state.margin}px 0`,
			borderWidth: this.state.borderWidth,
			top: topOffset
		}
	}
	render() {
		return <div className='listItem' style={this.setStyle()}>
			{this.props.pokemon.national_id}
			{this.props.pokemon.name}
			{this.props.pokemon.form}
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
