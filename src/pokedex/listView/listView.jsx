import React, { Component } from 'react';

import ListItem from './listItem.jsx'
import './listView.scss';

class ListView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listItemTotalHeight: 60
		}
		this.prevPokemon = this.prevPokemon.bind(this);
		this.nextPokemon = this.nextPokemon.bind(this);
	}
	componentWillMount() {
		this.props.fetchAllPokemon();
	}
	renderListContent() {
		const topOffset = -this.props.targetIndex * this.state.listItemTotalHeight;
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
		return <ListItem
			key={index}
			totalHeight={this.state.listItemTotalHeight}
			itemIndex={index}
			targetIndex={this.props.targetIndex}
			pokemon={pokemon} />
	}
	nextPokemon() {
		this.props.nextPokemon();
	}
	prevPokemon() {
		this.props.prevPokemon();
	}
	render() {
		console.log("LIST VIEW", this.props.targetIndex);
		// return <div className='listView'>
		// 	<div className='button' onClick={this.prevPokemon}>prev</div>
		// 	<div className='listContainer'>
		// 		{this.renderListContent()}
		// 	</div>
		// 	<div className='button' onClick={this.nextPokemon}>next</div>
		// </div>;
		return <div className='listView'>
			<div className='button' onClick={this.prevPokemon}>prev</div>
			<div className='listContainer'>
				{this.renderListItems()}
			</div>
			<div className='button' onClick={this.nextPokemon}>next</div>
		</div>;
	}
}

export default ListView;
