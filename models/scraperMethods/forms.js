const cheerio = require('cheerio');
const requestUrl = require('./helpers/requestUrl.js');
const randTimer = require('./helpers/randTimer.js');
const sleepFor = require('./helpers/sleep.js');
const writeFile = require('./helpers/writeFile');
const fs = require('fs');

const mergeHelper = {
	readFolderContents: (folderPath) => {
		let files = [];
		fs.readdirSync(folderPath).forEach((file) => {
			if(file.includes('.json')) files.push(folderPath + file);
		});
		return files;
	},
	mergeFiles: (fileNames) => {
		let mergedObj = {};
		fileNames.forEach((fileName) => {
			const file = require(`.${fileName}`);
			const cleanForms = mergeHelper.removeEmptyStrings(file.forms);
			const newEntry = {
				[file.unique_id]: cleanForms
			};
			mergeObj = Object.assign(mergedObj, newEntry);
		});
		return mergedObj;
	},
	removeEmptyStrings: (arr) => {
		const newArr = [];
		arr.forEach((element) => {
			if(element !== '') newArr.push(element);
		});
		return newArr;
	}
};


const scraper = {
	outputPath: './json/forms/',
	baseUrl: 'http://pokemondb.net',
	merge: (inputPath, outputPath) => {
		console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
		const fileNames = mergeHelper.readFolderContents(inputPath);
		const mergedObj = mergeHelper.mergeFiles(fileNames);

		writeFile.json(outputPath, mergedObj);
	},
	get: (url) => {
		const requestSprites = requestUrl(url);
		
		requestSprites.then((body) => {
			const $ = cheerio.load(body);
			const generations = $('.infocard-list-compact');
			
			scraper.eachGeneration($, generations)
				.then(scraper.eachSprite);
			
		})
		.catch((err) => { return err; })
	},
	eachGeneration: ($, generations) => {
		return new Promise((resolve, reject) => {
			let pokemon = {};
			$(generations).map((index, generation) => {
				const sprites = $(generation).children('span.infocard');
				$(sprites).each((index, sprite) => {
					const unique_id = $(sprite).find('.pki').attr('data-sprite').split(' ')[1];
					const profilePath = $(sprite).find('.infocard-data').find('a').attr('href');
					const profileUrl = scraper.baseUrl + profilePath;

					pokemon[unique_id] = profileUrl;
				});
				
			});
			resolve(pokemon);
		});
	},
	eachSprite: (spriteMap) => {
		Object.keys(spriteMap).forEach((unique_id, index) => {
			const profileUrl = spriteMap[unique_id];
				setTimeout(() => {
					scraper.writeSprite(unique_id, profileUrl)
				}, index * randTimer());
		})
	},
	writeSprite: (unique_id, url) => {
		scraper.enterSprite(url).then((forms) => {
			const sprite = { unique_id,  forms };
			writeFile.json(`${scraper.outputPath}${unique_id}.json`, sprite);
		})
		.catch((err) => { console.log('WRITE SPRITE ERROR: ', err)})
	},
	enterSprite: (url) => {
		const requestSprite = requestUrl(url);
		
		return requestSprite.then((body) => {
			const $ = cheerio.load(body);
			const genHeaders = $('h2');
			const gen6 = scraper.getGenTable($, genHeaders, 6);
			const normalContainer = $(gen6).children('tr').eq(0).children('td').eq(1);
			const formContainers = $(normalContainer).children('span.sprites-table-img');
			
			let forms = [];
			$(formContainers).each((index, container) => {
				const form = $(container).text().toLowerCase();
				forms.push(form);
			});
			return forms;
		})
		.catch((err) => {
			console.log('ERROR D: ', err);
			return err;
		});
	},
	getGenTable: ($, genHeaders, genTarget = 6) => {
		const target = `Generation ${genTarget}`;
		let targetTable;
		$(genHeaders).each((index, header) => {
			if($(header).text() == target)  {
				targetTable = $(header).next().find('tbody');
			}
		});
		return targetTable;
	}
};

module.exports = scraper;