const QP = require('./qp.js');
const schema = require('./schema.js');

const tables = {
	all: ['main'],
	pid: [
		'main', 'general', 'entry', 'abilities', 'moves',
		'base_stats', 'min_stats', 'max_stats',
		'training', 'types', 'location'
	]
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
			const abilities = res.abilities.map((obj) => {
				return obj.ability;
			});
			const location = res.location.reduce((acc, obj) => {
				if(!acc[obj.version]) acc[obj.version] = [];
				acc[obj.version].push(obj.location);
				return acc;
			}, {});
			const moves = res.moves.map((obj) => {
				return QP.sanitizeObject(obj, ['unique_id']);
			});
			const entry = res.entry.reduce((acc, obj) => {
				acc[obj.version] = obj.description;
				return acc;
			}, {});
			const general = QP.sanitizeObject(res.general[0], ['unique_id']);
			const training = QP.sanitizeObject(res.training[0], ['unique_id']);
			const base_stats = QP.sanitizeObject(res.base_stats[0], ['unique_id']);
			const min_stats = QP.sanitizeObject(res.min_stats[0], ['unique_id']);
			const max_stats = QP.sanitizeObject(res.max_stats[0], ['unique_id']);

			return {
				main: res.main[0],
				general,
				abilities,
				base_stats,
				min_stats,
				max_stats,
				training,
				types,
				location,
				entry,
				moves
			}
		}) 
		.catch((err) => {
			return err;
		})
	}
}

module.exports = Model;