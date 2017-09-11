import axios from "axios";

export function fetchAllPokemon() {
	return {
		type: "FETCH_ALL_POKEMON",
		payload: axios.get("http://localhost:3001/api/v1/pokedex/all")
	}
}

export function fetchPokemonById(id) {
	console.log("ACTIONS FILE", `http://localhost:3001/api/v1/pokedex/pid/${id}`)
	return {
		type: "FETCH_POKEMON_BY_ID",
		payload: axios.get(`http://localhost:3001/api/v1/pokedex/pid/${id}`)
	}
}
