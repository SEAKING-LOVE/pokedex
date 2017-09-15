const Utils = {
	typeColors: {
		normal: '#ffe5b4',
		fire: '#f6614f',
		water: '#00ccff',
		electric: '#fdfd96',
		grass: '#71bc78',
		ice: '#a4f4f9',
		fighting: '#c90016',
		poison: '#8a496b',
		ground: '#a67b5b',
		flying: '#cec8ef',
		psychic: '#de6fa1',
		bug: '#d0ce1c',
		rock: '#bebebe',
		ghost: '#9678b6',
		dragon: '#0f4d92',
		dark: '#1c2841',
		steel: '#a2add0',
		fairy: '#ffc0cb',	
	},
	typesToColors: (types=[]) => {
		return types.map((type) => {
			return Utils.typeColors[type.toLowerCase()];
		});
	},
	no_(string) {
		return string.replace(/_/gi, ' ');
	},
	spellers: {
		special_attack: 'sp. atk',
		special_defence: 'sp. def',
		spedical_defence: 'sp. def' 	// fix this bs in the back end
	},
	respell: (str) => {
		if(Utils.spellers[str]) return Utils.spellers[str];
		return str;
	}

};

module.exports = Utils;