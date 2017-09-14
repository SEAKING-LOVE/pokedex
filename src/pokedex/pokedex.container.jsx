import { connect } from 'react-redux';

import * as actions from './pokedex.actions.js';
import Pokedex from './pokedex.jsx';

const stateToProps = (state) => ({
	allPokemon: state.pokedex.all,
	selectedPokemon: state.pokedex.selected
});

const dispatchToProps = (dispatch) => {
	return {
		fetchAllPokemon: () => dispatch( actions.fetchAllPokemon() ),
		fetchProfile: (id) => dispatch( actions.fetchProfile(id))
	}
}

const Container = connect(
	stateToProps,
	dispatchToProps
)(Pokedex)

export default Container;