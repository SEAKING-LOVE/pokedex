import { combineReducers } from 'redux';

const initialState = {
	all: [],
	error: ''
};

// import reducerA from "./reducerA";
// import reducerB from "./reducerB";

// const reducers = combineReducers({
// 	reducerA,
// 	reducerB
// })
export default function reducer(state=initialState, action) {
	switch(action.type) {
		case "FETCH_ALL_POKEMON": {
			console.log(action.payload)
			return {...state, all: action.payload };
		}
		case "FETCH_ERROR": {
			return {...state, error: action.payload };
		}
		default: {
			console.log("Action not found: ", action.type);
			// return { ...state};
		}
	}
}
