import axios from "axios";

// const action = store.dispatch((dispatch) => {
// 	dispatch({type: "CHANGE_NAME_START"}); 	// can display loading bar, etc
	
// 	axios.get("url")
// 		.then((response) => {
// 			dispatch({type: "CHANGE_NAME", payload: response.data});
// 		})
// 		.catch((error) => {
// 			dispatch({type: "CHANGE_NAME_ERROR", payload: error });
// 		})
// });


export function fetchAllPokemon() {
	console.log("::::::::::::::::::::::: REACHED ACTIONS :::::::::::::::::::::::");
	return {
		type: "FETCH_ALL_POKEMON",
		payload: axios.get("http://localhost:3001/api/v1/pokedex/all")
		// payload: 'fetching all test'
	}
	// return axios.get("http://localhost:3001/api/v1/pokedex/all")
	// 		.then((res) => {
	// 			console.log("::::::::::::::::::::::: AXIOS SUCCESS :::::::::::::::::::::::")
	// 			dispatch({ type: "FETCH_ALL_POKEMON", payload: res });
	// 		})
	// 		.catch((err) => {
	// 			console.log("ERROR FETCHING");
	// 			dispatch({type: "FETCH_ERROR", payload: err });
	// 		})
}


