import axios from "axios";

export function fetchAllPokemon() {
	return {
		type: "FETCH_ALL_POKEMON",
		payload: axios.get("http://localhost:3001/api/v1/pokedex/all")
	}
}

export function fetchPokemonById(id) {
	const url = `http://localhost:3001/api/v1/pokedex/pid/${id}`
	console.log("FETCHING PKM BY ID", url);
	return {
		type: "FETCH_POKEMON_BY_ID",
		payload: axios.get(url)
	}
}

export function fetchSprite(id) {
	const url = `http://localhost:3001/assets/sprites/pid/${id}`
	console.log("FETCHING SPRITE",  url);
	return  {
		type: "FETCH_SPRITE",
		payload: url
	}
}
