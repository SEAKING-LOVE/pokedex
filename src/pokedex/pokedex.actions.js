import axios from 'axios';
import API from '../pokedex.api.js';

export function fetchAllPokemon() {
	return {
		type: "FETCH_ALL_POKEMON",
		payload: axios.get(API.fetchAllPokemon())
	}
}

export function fetchPokemonById(id) {
	return {
		type: "FETCH_POKEMON_BY_ID",
		payload: axios.get(API.fetchPokemonById(id))
	}
}

export function fetchSprite(id) {
	return  {
		type: "FETCH_SPRITE",
		payload: API.fetchSprite(id) //  return url to embed in img tag
	}
}
