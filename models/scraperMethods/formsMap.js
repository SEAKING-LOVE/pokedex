const map = {
	sanitizers: { // true = keep text + remove rest, false = remove text, keep rest
		cloak: false,
		drive: false,
		flower: false,
		forme: false,
		form: false,
		mode: false,
		male: false,
		pattern: false,
		sea: false,
		size: false,
		trim: false
	},
	spelling: {
		female: "f",
		// fe: "f" 	// temp work around for fe[male] bug
	}
};

module.exports = map;