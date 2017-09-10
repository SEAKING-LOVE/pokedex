import { applyMiddleware, createStore } from 'redux';
// import thunk from "redux-thunk";
import promise from 'redux-promise';
import reducer from './root.reducer.js';

import pokedexReducer from './pokedex/pokedex.reducer.js';

const middleware = applyMiddleware(promise);

export default createStore(reducer, middleware);