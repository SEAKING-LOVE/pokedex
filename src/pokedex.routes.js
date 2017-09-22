const Routes = {
	pokedex: {
		home: () => {
			return '/';
		},
		profile: (id) => {
			return {
				get: '/pokedex/:id',
				set: `/pokedex/${id}`
			}
		}
	}
};

module.exports = Routes;