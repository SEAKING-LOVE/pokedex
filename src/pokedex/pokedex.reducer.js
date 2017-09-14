const initialState = {
	all: [],
	selected: {},
	selectedSprite: '',
	error: ''
};

export default function pokedexReducer(state=initialState, action) {
	switch(action.type) {
		case "FETCH_ALL_POKEMON": {
			return {...state, all: action.payload.data.main };
		}
		case "FETCH_ERROR": {
			return {...state, error: action.payload };
		}
		case "FETCH_PROFILE": {
			return {
				...state,
				selected: action.payload.data.data,
				selectedSprite: action.payload.sprite
			}
		}
		default: {
			console.log("Action not found: ", action.type);
			return { ...state};
		}
	}
}