import { connect } from 'react-redux';

import * as actions from '../../pokedex.actions.js';
import Summary from './summary.jsx';

const stateToProps = (state) => ({
	height: state.pokedex.selected.general.height,
	weight: state.pokedex.selected.general.weight,
	// species: state.pokedex.selected.general.species,
	abilities: state.pokedex.selected.abilities,
	catchRate: state.pokedex.selected.training.catch_rate,
	evYield: state.pokedex.selected.training.ev_yield,
	baseHappiness: state.pokedex.selected.training.base_happiness
});

const dispatchToProps = (dispatch) => {
	return { }
}

const Container = connect(
	stateToProps,
	dispatchToProps
)(Summary)



export default Container;