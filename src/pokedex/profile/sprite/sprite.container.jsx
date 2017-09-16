import { connect } from 'react-redux';

import * as actions from '../../pokedex.actions.js';
import Sprite from './sprite.jsx';

const stateToProps = (state) => ({
	source: state.pokedex.selectedSprite,
	types: state.pokedex.selected.types
});

const dispatchToProps = (dispatch) => {
	return { }
}

const Container = connect(
	stateToProps,
	dispatchToProps
)(Sprite)

export default Container;