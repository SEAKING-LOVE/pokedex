import { connect } from 'react-redux';

import * as actions from '../pokedex.actions.js';
import Profile from './profile.jsx';

const stateToProps = (state) => ({
	profile: state.pokedex.selected,
	abilities: state.pokedex.selected.abilities,
	baseStat: state.pokedex.selected.base_stats,
	minStat: state.pokedex.selected.min_stats,
	maxStat: state.pokedex.selected.max_stats,
	entry: state.pokedex.selected.entry,
	general: state.pokedex.selected.general,
	location: state.pokedex.selected.location,
	main: state.pokedex.selected.main,
	moves: state.pokedex.selected.moves,
	training: state.pokedex.selected.training,
	types: state.pokedex.selected.types
});

const dispatchToProps = (dispatch) => {
	return {
		fetchProfile: (id) => dispatch( actions.fetchProfile(id))
	}
}

const Container = connect(
	stateToProps,
	dispatchToProps
)(Profile)

export default Container;