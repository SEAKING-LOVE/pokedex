import React, { Component } from 'react';

import './listView.scss';

class ListView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listItemHeight: 40
		}
		this.prevPokemon = this.prevPokemon.bind(this);
		this.nextPokemon = this.nextPokemon.bind(this);
	}
	componentWillMount() {
		this.props.fetchAllPokemon();
	}
	renderListContent() {
		console.log(this.props.targetIndex)
		const topOffset = -this.props.targetIndex * this.state.listItemHeight;
		const style = {
			top: topOffset	
		}
		return <div className='listContent' style={style}>
			{this.renderListItems()}
		</div>
	}
	renderListItems() {
		if(!this.props.all) return this.renderLoadingState();
		return this.props.all.map((pokemon, index) => {
			return this.renderListItem(pokemon, index);
		})
	}
	renderLoadingState() {
		return <div>loading...</div>
	}
	renderListItem(pokemon, index) {
		const style = {
			height: this.state.listItemHeight
		}
		return <div key={index} className='listItem' style={style}>
			{index}
		</div>
	}
	nextPokemon() {
		this.props.nextPokemon();
	}
	prevPokemon() {
		this.props.prevPokemon();
	}
	render() {
		return <div className='listView'>
			<div className='button' onClick={this.prevPokemon}>prev</div>
			<div className='listContainer'>
				{this.renderListContent()}
			</div>
			<div className='button' onClick={this.nextPokemon}>next</div>
		</div>;
	}
}

export default ListView;
