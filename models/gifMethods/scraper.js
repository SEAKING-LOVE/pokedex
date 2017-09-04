const cheerio = require('cheerio');
const requestUrl = require('../scraperMethods/helpers/requestUrl');
const writeFile = require('../scraperMethods/helpers/writeFile.js');

const pokemonJSON = require('../json/pokemon.json')

const spriteUrl = {
	base: 'http://play.pokemonshowdown.com',
	regularPath: '/sprites/xyani/' ,
	shinyPath:  '/sprites/xyani-shiny/'
};

const Gifs = {
	request: (url, filepath) => {
		const requestRegular = requestUrl(url);

		requestRegular.then((body) => {
			const $ = cheerio.load(body);
			const rows = $('table').first().find('tbody').children('tr');
			Gifs.eachRow($, url, filepath, rows);
		})
	},
	getRegular: (filepath) => {
		const url = spriteUrl.base + spriteUrl.regularPath;
		Gifs.request(url, filepath);
	},
	getShiny: (filepath) => {
		const url = spriteUrl.base + spriteUrl.shinyPath;
		Gifs.request(url, filepath);
	},
	eachRow: ($, baseUrl, baseFilepath, rows) => {

		$(rows).each((index, row) => {
			const gifCell = $(row).children('td').eq(1);
			const gifName = gifCell.text();
			
			const baseCond = 1160;
			const indexCond = index >= baseCond && index < baseCond + 40;

			if(gifName.includes('.gif') && indexCond) {
				const gifUrl = baseUrl + Gifs.getPath($, gifCell);
				const filepath = baseFilepath + gifName;

				writeFile.image(gifUrl, filepath, 1);
			}
		})
	},
	getPath: ($, cell) => {
		const path = $(cell).find('a').attr('href');
		return path;
	}
};

module.exports = Gifs;