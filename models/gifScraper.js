const scraper = require('./gifMethods/scraper.js');
const resizeScript = require('./gifMethods/resize.js');
const rename = require('./gifMethods/rename.js');
const optimize = require('./gifMethods/minify.js');


main();

function main() {
	// scraper.getRegular('./gifs/regular/');
	// rename.all('./gifs/regular/');
	resizeScript('./gifs/regular/', './gifs/regular2x/', 2);
	// optimize('./gifs/regular/', './gifs/regular/');
};
	