import { createStore } from 'redux'
import reducers from './reducers.js';

export default function configureStore(initialState) {
	return createStore(reducers, initialState);
};