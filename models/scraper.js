const pokemonList = require('./scraperMethods/pokemonList.js');
const evolutionChart = require('./scraperMethods/evolutionChart.js');
const masterTypeChart = require('./scraperMethods/masterTypeChart.js');
const masterMoveList = require('./scraperMethods/masterMoveList.js');
const masterAbilityList = require('./scraperMethods/masterAbilityList.js');
const formsList = require('./scraperMethods/forms.js');
const writeFile = require('./scraperMethods/helpers/writeFile.js');
const writeProfiles = require('./scrapeProfiles.js');
const EventEmitter = require('events');
require('events').EventEmitter.defaultMaxListeners = Infinity;

main();

function main() {
	
	const baseUrl = "http://pokemondb.net";

	// pokemonList.get(baseUrl, list => {
		// writeFile.json('./json/pokemon.json', list);
		// writeProfiles.profiles();
	// });
	// evolutionChart.get(baseUrl + '/evolution', evolFamilies => {
	// 	writeFile.json('./json/evolutions.json', evolFamilies);
	// });	

	// masterTypeChart.get(baseUrl + '/type/dual', types => {
	// 	writeFile.json('./json/types.json', types);

	// });

	// masterMoveList.get(baseUrl + '/move/all', moves => {
	// 	writeFile.json('./json/moves.json', moves);
	// });

	// masterAbilityList.get(baseUrl + '/ability', abilities => {
	// 	writeFile.json('./json/abilities.json', abilities);
	// });


	// formsList.get(baseUrl + '/sprites');
	formsList.merge('./json/forms/', './json/forms.json');
}
