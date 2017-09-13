const path = require('path');

const rootPath = __dirname + '/../..';
const gifPath = rootPath + '/models/gifs/regular2x/';

const Controller = {
	pid: (req, res) => {
		const pid = req.params.pid;
		res.sendFile(path.join(gifPath + `${pid}.gif`));
	}
};

module.exports = Controller;