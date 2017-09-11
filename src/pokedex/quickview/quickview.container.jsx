import { connect } from 'react-redux';

import * as actions from '../pokedex.actions.js';
import Quickview from './quickview.jsx';

const stateToProps = (state) => ({
	pokemon: state.pokedex.selected,
	identifier: state.pokedex.selected.main
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