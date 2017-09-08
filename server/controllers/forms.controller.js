const Forms = require('../models/forms.model.js');

const Controller = {
	all: (req, res) => {
		Forms.all()
			.then((data) => { res.send(data); })
			.catch((err) => { res.send(err); });
	},
	pid: (req, res) => {
		const formlessPid = req.params.pid.replace(/-.*$/, '');
		
		Forms.pid(formlessPid)
			.then((data) => { res.send(data); })
			.catch((err) => { res.send(err); });
	}
};

module.exports = Controller;