const initialState = {
	all: [],
	selected: {
		main: {
			unique_id: '',
			national_id: 0,
			name: '',
			form: ''
		},
		general: {
			height: '',
			weight: '',
			species: ''
		},
		type: [],
		abilities: [],
		training: {
			ev_yield: '',
			catch_rate: '',
			base_happiness: '',
			base_exp: '',
			growth_rate: '',
			egg_groups: ''
		}
	},
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