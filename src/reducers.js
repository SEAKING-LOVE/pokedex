export default (state= {
	all: []
}, action => {
	switch(action.type) {
		case 'GET_ALL_POKEMON': 
		return { ...state, all: action.data };
		break;
	}
});