import { connect } from 'react-redux';

import * as actions from '../pokedex.actions.js';
import Profile from './profile.jsx';

const stateToProps = (state) => ({
	sprite: state.pokedex.selectedSprite,
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
	return { }
}

const Container = connect(
	stateToProps,
	dispatchToProps
)(Profile)

export default Container;