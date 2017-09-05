const fs = require('fs');
const pokemonJSON = require('../json/pokemon.json');
const formMap = require('./formMap.js');
const nameMap = require('./nameMap.js');

const utils = {
	mapId: (obj, key) => {
		return obj.map((item) => {
			return item[key];
		});
	},
	mapFullname: (obj,firstKey, lastKey) => {
		return obj.map((item) => {
			const firstName = utils.formatName(item[firstKey]);
			const lastName = utils.formatForm(item[lastKey], firstName);
			return firstName + lastName;
		});
	},
	formatName: (rawName) => {
		const name = utils.normalizeStr(rawName);
		return name;
	},
	formatForm: (rawForm, name) => {
		const sanitizers = formMap.sanitizers
		const spellings = formMap.spelling;

		let form = utils.normalizeStr(rawForm);
		form = form.replace(name, '');
		form = utils.sanitize(sanitizers, form);
		form = utils.respell(spellings, form);
		form = utils.trim(form);
		return form === '' ? '' : `-${form}`;
	},
	sanitize: (sanitizers, str) => {
		let newStr = str;
		Object.keys(sanitizers).forEach((key) => {
			const keepSanitizerKey = sanitizers[key];
			if(str.includes(key)) {
				if(keepSanitizerKey) newStr = key;
				if(!keepSanitizerKey) newStr = newStr.replace(key, '');
			}
		});
		return newStr;
	},
	respell: (spellings, str) => {
		let newStr = str;
		Object.keys(spellings).forEach((key) => {
			if(str == key) {
				const correctSpelling = spellings[key];
				newStr = correctSpelling;
			}
		});
		return newStr;
	},
	normalizeStr: (str) => {
		return str.normalize('NFD').replace(/[\u0300-\u036f|\W]/g, "").toLowerCase();
	},
	trim: (str) => {
		return str.replace(/\s/g, '');
	}
}
const rename = {
	all: (folderPath) => {
		const fileNames = rename.getFileNames(folderPath);
		const uniqueIds = utils.mapId(pokemonJSON, 'unique_id');
		const dbNames = utils.mapFullname(pokemonJSON, 'name', 'form') + '.gif';
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
	matchNames: (files) => {
		pokemonJSON.forEach((pokemon, index) => {
			const fileIndex = files.indexOf()
		})
	}
};

module.exports = rename;