import { connect } from 'react-redux';

import * as actions from '../pokedex.actions.js';
import Quickview from './quickview.jsx';

const stateToProps = (state) => ({
	spriteImage: state.pokedex.selectedSpriteImage,
	main: state.pokedex.selected.main,
	general: state.pokedex.selected.general,
	moves: state.pokedex.selected.moves,
	baseStats: state.pokedex.selected.base_stats,
	minStats: state.pokedex.selected.min_stats,
	maxStats: state.pokedex.selected.max_stats,
	training: state.pokedex.selected.training,
	types: state.pokedex.selected.types,
	location: state.pokedex.selected.location,
});

const dispatchToProps = (dispatch) => {
	return {
		fetchPokemonById: (id) => dispatch(actions.fetchPokemonById(id)) 
	}
}

const Container = connect(
	stateToProps,
	dispatchToProps
)(Quickview)

export default Container;