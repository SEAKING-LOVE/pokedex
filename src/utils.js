const Utils = {
	typeColors: {
		normal: (alpha=1.0) => { 
			return `rgba( 255,229,180 , ${alpha})`
		},
		fire: (alpha=1.0) => {
			return `rgba( 246,97,79, ${alpha})`
		},
		water: (alpha=1.0) => {
			return `rgba( 0,204,255, ${alpha})`
		}, 
		electric: (alpha=1.0) => {
			return `rgba( 241,190,92, ${alpha})`
		}, 
		grass: (alpha=1.0) => {
			return `rgba( 113,188,120, ${alpha})`
		},
		ice: (alpha=1.0) => {
			return `rgba( 164,244,249, ${alpha})`
		},
		fighting: (alpha=1.0) => {
			return `rgba( 164,244,249, ${alpha})`
		},
		poison: (alpha=1.0) => {
			return `rgba( 138,73,107, ${alpha})`
		},
		ground: (alpha=1.0) => {
			return `rgba( 166,123,91, ${alpha})`
		}, 
		flying: (alpha=1.0) => {
			return `rgba( 206,200,239, ${alpha})`
		},
		psychic: (alpha=1.0) => {
			return `rgba( 222,111,161, ${alpha})`
		},
		bug: (alpha=1.0) => {
			return `rgba( 208,206,28, ${alpha})`
		}, 
		rock: (alpha=1.0) => {
			return `rgba( 190,190,190, ${alpha})`
		},
		ghost: (alpha=1.0) => {
			return `rgba( 150,120,182, ${alpha})`
		},
		dragon: (alpha=1.0) => {
			return `rgba( 15,77,146, ${alpha})`
		},
		dark: (alpha=1.0) => {
			return `rgba( 28,40,65, ${alpha})`
		}, 
		steel: (alpha=1.0) => {
			return `rgba( 162,173,208, ${alpha})`
		},
		fairy: (alpha=1.0) => {
			return `rgba( 255,192,203, ${alpha})`
		},	
	},
	typesToColors: (types=[], alpha=1.0) => {
		return types.map((type) => {
			return Utils.typeColors[type.toLowerCase()](alpha);
		});
	},
	no_(string) {
		return string.replace(/_/gi, ' ');
	},
	sanitizers: {
		special_attack: 'sp. atk',
		special_defence: 'sp. def',
		spedical_defence: 'sp. def', 	// fix this bs in the back end,
		attack: 'atk',
		defence: 'def'
	},
	sanitize: (str) => {
		const normalizedStr = str.toLowerCase();
		if(Utils.sanitizers[normalizedStr]) return Utils.sanitizers[normalizedStr];
		return normalizedStr;
	}

};

module.exports = Utils;