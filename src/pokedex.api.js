const buildUrl = {
	api: (query) => {
		return `${API_HOST}/api/v1/${query}`;
	},
	assets: (query) => {
		return `${API_HOST}/assets/${query}`;	
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