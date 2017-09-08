const QP = require('./qp.js');
const schema = require('./schema.js');

const tables = {
	all: ['forms'],
	pid: ['forms']
};

const Model = {
	all: () => {
		const queryString = QP.eachTable(tables.all);

		return QP.query(tables.all, queryString)
			.then((res) => { return res; })
			.catch((err) => { return err; });
	},
	pid: (pid) => {
		const whereCondition = QP.whereCondition(`unique_id='${pid}'`);
		const queryString = QP.eachTable(tables.pid, whereCondition);

		return QP.query(tables.pid, queryString)
			.then((res) => { return res; })
			.catch((err) => { return err; });
	}
};

module.exports = Model;