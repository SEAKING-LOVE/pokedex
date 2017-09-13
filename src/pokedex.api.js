const buildUrl = {
	api: (query) => {
		return `http://localhost:3001/api/v1/${query}`;
	},
	assets: (query) => {
		return `http://localhost:3001/assets/${query}`;	
	}
}

const API = {
	fetchAllPokemon: () => {
		return buildUrl.api('pokedex/all');
	},
	fetchPokemonById: (id) => {
		return buildUrl.api(`pokedex/pid/${id}`);
	},
	fetchSprite: (id) => {
		return buildUrl.assets(`sprites/pid/${id}`);
	}

};

module.exports = API;