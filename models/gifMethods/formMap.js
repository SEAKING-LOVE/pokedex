const map = {
	sanitizers: { 	// true = keep text + remove rest, false = remove text, keep rest
		alolan: true,
		primal: true,
		forme: false,
		form: false,
		mode: false,
		size: false,
		style: false,
		cloak: false,
		average: false,
		normal: false, 		// deoxys
		50: false,		// zygarde
		confined: false,		// hoopa
		incarnate: false, 	// tornadus, landorus, thundurus
		shield: false, 		// aegislash
		altered: false, 		// giratina
		core: false,		// minior
		plant: false, 		// wormadam
		standard: false, 	// darmanitan
	},
	spelling: {
		alolan: 'alola',
		mega: 'mega',
		female: 'f',
		male: ''
	}
		
};
module.exports = map;

// castform
// cherrim