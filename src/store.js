import { applyMiddleware, createStore } from 'redux';
// import thunk from "redux-thunk";
import promise from 'redux-promise';
import reducer from './reducers.js';


const middleware = applyMiddleware(promise);

export default createStore(reducer, middleware);