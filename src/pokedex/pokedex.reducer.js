const initialState = {
	all: [],
	selected: {},
	error: ''
};

export default function pokedexReducer(state=initialState, action) {
	switch(action.type) {
		case "FETCH_ALL_POKEMON": {
			return {...state, all: action.payload.data.main };
		}
		case "FETCH_POKEMON_BY_ID": {
			return { ...state, selected: action.payload.data };
		}
		case "FETCH_ERROR": {
			return {...state, error: action.payload };
		}
		default: {
			console.log("Action not found: ", action.type);
			return { ...state};
		}
	}
}