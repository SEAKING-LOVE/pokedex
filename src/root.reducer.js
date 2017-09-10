import { combineReducers } from 'redux';
import pokedexReducer from './pokedex/pokedex.reducer.js';

const reducers = combineReducers({
	pokedex: pokedexReducer,
	// team: teamReducer
});
export default reducers;