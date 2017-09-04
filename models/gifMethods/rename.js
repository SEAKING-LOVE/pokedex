const fs = require('fs');

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

module.exports = rename;