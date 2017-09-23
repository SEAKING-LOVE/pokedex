import { connect } from 'react-redux';

import * as actions from '../../pokedex.actions.js';
import SpriteCard from './spriteCard.jsx';

const stateToProps = (state) => ({
	name: state.pokedex.selected.main.name,
	form: state.pokedex.selected.main.form,
	nationalNo: state.pokedex.selected.main.national_id,
	types: state.pokedex.selected.types,
	imgSource: state.pokedex.selectedSprite
});

const dispatchToProps = (dispatch) => {
	return { }
}

const Container = connect(
	stateToProps,
	dispatchToProps
)(SpriteCard)



export default Container;