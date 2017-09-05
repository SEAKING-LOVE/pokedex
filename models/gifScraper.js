const scraper = require('./gifMethods/scraper.js');
const resizeScript = require('./gifMethods/resize.js');
const rename = require('./gifMethods/rename.js');


main();

function main() {
	// scraper.getRegular('./gifs/regular/');
	// resizeScript('./gifs/regular/', './gifs/regular2x/', 2);
	rename.all('./gifs/regular/');
};
	