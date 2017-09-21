import { connect } from 'react-redux';

import * as actions from '../pokedex.actions.js';
import List from './listView.jsx';

const stateToProps = (state) => ({
	allPokemon: state.pokedex.all,
	targetIndex: state.pokedex.currentListIndex,
	all: state.all
});

const dispatchToProps = (dispatch) => {
	return {
		fetchAllPokemon: () => dispatch( actions.fetchAllPokemon() ),
		nextPokemon: () => dispatch( actions.nextListIndex() ),
		prevPokemon: () => dispatch( actions.prevListIndex() )
	}
}

const Container = connect(
	stateToProps,
	dispatchToProps
)(List)

export default Container;