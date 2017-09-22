import axios from 'axios';
import API from '../pokedex.api.js';


export function fetchAllPokemon() {
	return {
		type: "FETCH_ALL_POKEMON",
		payload: axios.get(API.fetchAllPokemon())
	}
}

export function fetchProfile(id) {
	return {
		type: "FETCH_PROFILE",
		payload: axios.get(API.fetchPokemonById(id))
			.then((res) => {
				return {
					data: res,
					sprite: API.fetchSprite(id)
				}
			})
	}
}

export function nextListIndex() {
	return {
		type: "NEXT_LIST_INDEX"
	}
}

export function prevListIndex() {
	return {
		type: "PREV_LIST_INDEX"
	}
}






