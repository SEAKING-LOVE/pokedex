const map = {
	sanitizers: { 	// true = keep text + remove rest, false = remove text, keep rest
		alolan: true,
		mega: true,
		primal: true,
		forme: false,
		form: false,
		mode: false,
		size: false,
		style: false,
		cloak: false,
		average: false,
		normal: false, 		// deoxys
	},
	spelling: {
		alolan: 'alola',
		mega: 'mega',
		female: 'f',
		male: ''
	}
		
};
module.exports = map;