const fs = require('fs');
const sizeOf = require('image-size');

const resize = (rawFolderPath, newFolderPath, multiplier) => {
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
	});
	console.log('run the following command to resize gifs: sh resizeGifs.sh');
}

module.exports = resize;