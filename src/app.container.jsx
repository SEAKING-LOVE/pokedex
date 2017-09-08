import {connect } from 'react-redux';
import * as Actions from './actions.js';
import App from './app.jsx';

const mapStateToProps = (state, ownProps) => {
	return { allPokemon: state.all }
};

const mapDispatchToProps = (dispatch) => {
	return { getAllPokemon: () => dispatch(Actions.getAllPokemon()).data }
};

export default connect(mapStateToProps, mapDispatchToProps)(List); 