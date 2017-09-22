import { connect } from 'react-redux';

import * as actions from '../pokedex.actions.js';
import Profile from './profile.jsx';

const stateToProps = (state) => ({
	profile: state.pokedex.selected
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