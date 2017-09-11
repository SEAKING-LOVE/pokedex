import { connect } from 'react-redux';

import * as actions from '.../pokedex.actions.js';
import Preview from './preview.jsx';

const stateToProps = (state) = ({
	pokemon: state.pokedex.selected
});

const Container = connect(stateToProps)(Preview);

export default Container;