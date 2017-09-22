import React, { Component } from 'react';

import ListItem from './listItem/listItem.jsx';
import './listView.scss';

class ListView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listItemTotalHeight: 90,
			listContainerHeight: 400
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
			containerHeight={this.state.listContainerHeight}
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
	listContainerStyle() {
		return {
			height: this.state.listContainerHeight
		}
	}
	renderButton(htmlEntity, clickHandler) {
		return <div className='button' 
			onClick={clickHandler} 
			dangerouslySetInnerHTML={{__html: `${htmlEntity}`}} />
	}
	render() {
		return <div className='listView'>
			{this.renderButton('&ltdot;', this.prevPokemon)}
			<div className='listContainer' style={this.listContainerStyle()}>
				{this.renderListItems()}
			</div>
			{this.renderButton('&gtrdot;', this.nextPokemon)}
		</div>;
	}
}

export default ListView;
