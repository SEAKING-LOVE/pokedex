import { connect } from 'react-redux';

import * as actions from '../pokedex.actions.js';
import Preview from './preview.jsx';

const stateToProps = (state) => ({
	target: state.pokedex.all[state.pokedex.currentListIndex]
});

const dispatchToProps = (dispatch) => {
	return { 

	}
}

const Container = connect(
	stateToProps,
	dispatchToProps
)(Preview)

export default Container;