const QP = require('./qp.js');
const schema = require('./schema.js');

const tables = {
	pid: ['abilities'],
};

const Model = {
	pid: (pid) => {
		const whereCondition = QP.whereCondition(`unique_id='${pid}'`);
		const queryString = QP.eachTable(tables.pid, whereCondition);

		return QP.query(tables.pid, queryString)
			.then((res) => { return res; })
			.then((res) => {
				const abilities = res.abilities.map((obj) => {
					return obj.ability;
				});
				return { abilities }
			})
			.catch((err) => { return err; });
	}
};

module.exports = Model;