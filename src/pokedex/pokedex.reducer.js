const initialState = {
	all: [],
	selected: {},
	selectedSprite: '',
	error: '',
	currentListIndex: 4
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
		case "NEXT_LIST_INDEX": {
			const listLength = state.all.length || 1;
			return {
				...state,
				currentListIndex: ( state.currentListIndex + 1 ) % listLength
			}
		}
		case "PREV_LIST_INDEX": {
			const listLength = state.all.length || 1;
			let newIndex = state.currentListIndex - 1;
			if(newIndex < 0) newIndex = listLength - 1;

			return {
				...state,
				currentListIndex: newIndex
			}
		}
		default: {
			console.log("Action not found: ", action.type);
			return {...state};
		}
	}
}