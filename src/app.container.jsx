import { connect } from 'react-redux';

import * as actions from './actions.js';
import App from './app.jsx';

const stateToProps = (state) => ({
	data: 'Test'
});

const dispatchToProps = (dispatch) => {
	return {
		fetchAllPokemon: () => {
			console.log("::::::::::::::::::::::: REACHED CONTAINER :::::::::::::::::::::::")
			dispatch(actions.fetchAllPokemon());
		}
	}
}

const Container = connect(
	stateToProps,
	dispatchToProps
)(App)

export default Container;