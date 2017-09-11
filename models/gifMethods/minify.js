const fs = require('fs');

const optimizeConfig = {
	level: '-O3',
	colors: '--colors 11',
	command: (inputFile, outputFile) => {
		const command =  ` gifsicle ${optimizeConfig.level} ${optimizeConfig.colors} ${inputFile} -o ${outputFile}\n`;
		return command;
	} 
};

const optimize = (rawFolderPath, newFolderPath) => {
	const scriptFilepath = './optimizeGifs.sh';

	
	fs.unlink(scriptFilepath, cb => {
		fs.appendFileSync(scriptFilepath, '#!/bin/sh\n');
		fs.readdirSync(rawFolderPath).forEach((file) => {
			if(file.includes('.gif')) {
				const inputFile = rawFolderPath + file;
				const outputFile = newFolderPath + file;

				const optimize = optimizeConfig.command(inputFile, outputFile);
				fs.appendFileSync(scriptFilepath, optimize);
			}
		})
		
	});
	console.log('run the following command to optimize gifs: sh optimizeGifs.sh');
}

module.exports = optimize;