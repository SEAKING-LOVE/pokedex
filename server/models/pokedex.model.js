const QP = require('./qp.js');
const schema = require('./schema.js');

const tables = {
	all: ['main'],
	pid: ['main', 'general', 'moves', 'base_stats', 'min_stats', 'max_stats', 'training', 'types', 'location']
};

const Model = {
	all: () => {
		const queryString = QP.eachTable(tables.all);

		return QP.query(tables.all, queryString)
		.then((res) => {
			return res;
		})
		.catch((err) => {
			return err;
		});
	},
	pid: (pid) => {
		const whereCondition = QP.whereCondition(`unique_id='${pid}'`);
		const queryString = QP.eachTable(tables.pid, whereCondition);

		return QP.query(tables.pid, queryString)
		.then((res) => {return res})
		.then((res) => {
			const types = res.types.map((obj) => {
				return obj.type;
			});
			const location = res.location.reduce((acc, obj) => {
				if(!acc[obj.version]) acc[obj.version] = [];
				acc[obj.version].push(obj.location);
				return acc;
			}, {});
			
			return {
				main: res.main[0],
				general: res.general[0],
				moves: res.moves,
				base_stats: res.base_stats[0],
				min_stats: res.min_stats[0],
				max_stats: res.max_stats[0],
				training: res.training[0],
				types,
				location
			}
		}) 
		.catch((err) => {
			return err;
		})
	}
}

module.exports = Model;