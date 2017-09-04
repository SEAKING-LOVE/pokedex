const cheerio = require('cheerio');
const fs = require('fs');
const sizeOf = require('image-size');

const requestUrl = require('./helpers/requestUrl');
const writeFile = require('./helpers/writeFile.js');

const pokemonJSON = require('../json/pokemon.json')

const spriteUrl = {
	base: 'http://play.pokemonshowdown.com',
	regularPath: '/sprites/xyani/' ,
	shinyPath:  '/sprites/xyani-shiny/'
};
const rename = {
	execute: (folderPath) => {
		const fileNames = rename.getFileNames(folderPath);
		console.log(fileNames);
		console.log(pokemonJSON);

		// fs.rename(oldName, newName, (err) => {
		// 	if(err) throw err;
		// 	console.log('success')
		// })
	},
	getFileNames: (folderPath) => {
		let names = [];
		fs.readdirSync(folderPath).forEach((file) => {
			if(file.includes('.gif')) names.push(folderPath + file);
		});
		return names;
	},
	eachPokemon: (files) => {
		pokemonJSON.forEach((pokemon, index) => {
			const fileIndex = files.indexOf()
		})
	}
};

// i can read the pokemon.json file (contains uniqueid and forms) and the contents in the gifs folder
// oh pokemon.json also has names
// so if name+form+'.gif' == filename
// then filename -> unique_id+ '-' + form + '.gif'
// ?
// I'll lowercase things and strip away spaces

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
	},
	increaseSize: (rawFolderPath, newFolderPath, multiplier) => {
		const scriptFilepath = './resizeGifs.sh';
		
		fs.unlink(scriptFilepath, cb => {
			fs.appendFileSync(scriptFilepath, '#!/bin/sh\n');
			fs.readdirSync(rawFolderPath).forEach((file) => {
				if(file.includes('.gif')) {
					const dimensions = sizeOf(rawFolderPath + file);
					const newDimensions = ` ${dimensions.width * multiplier}x${dimensions.height * multiplier}`;
					const inputFile = rawFolderPath + file;
					const outputFile = newFolderPath + file;
					const increaseSize = ` gifsicle --resize ${newDimensions} --resize-method sample --colors 256 ${inputFile} > ${outputFile}\n`;
					fs.appendFileSync(scriptFilepath, increaseSize);
				}
			})
		})	
	},
	rename: (folderPath) => {
		rename.execute(folderPath);
	}
};

module.exports = Gifs;