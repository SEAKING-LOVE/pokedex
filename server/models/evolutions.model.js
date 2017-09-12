const QP = require('./qp.js');
const schema = require('./schema.js');

const tables = {
	all: ['evolutions'],
	pid: ['evolutions'],
	memberInfo: ['main', 'types']
};

const memberInfo = {
	get: (members=[]) => {
		const whereCondition = QP.multiWhere('OR', 'unique_id=', members)
		const queryString = QP.eachTable(tables.memberInfo, whereCondition);
		
		return QP.query(tables.memberInfo, queryString)
			.then((res) => { return memberInfo.format(res, members)})
			.catch((err) => { console.log('ERROR D: ', err) });
	},
	format: (res, members) => {
		let flattened = {};
		members.map((member, index) => {
			flattened[member] = {
				main: memberInfo.getMain(res.main, member),
				types: memberInfo.getTypes(res.types, member)
			}
		});

		return flattened;
	},
	getMain: (rows, id) => {
		let main;
		rows.forEach((row) => {
			if(id == row.unique_id)  main = row;
		})
		return main;
	},
	getTypes: (rows, id) => {
		let types = [];
		rows.forEach((row) => {
			if(id == row.unique_id) types.push(row.type);
		})
		return types;
	}

};

const qEvo = {
	query: (tables, queryString) => {
		return qEvo.base(tables, queryString)
			.then(qEvo.getMembers)
			.then(qEvo.format)
			.catch((err) => { return err})
	},

	base: (tables, queryString) => {
		return QP.query(tables, queryString)
			.then((res) => { return res; })
			.catch((err) => {return err; });
	},
	isBaby: (family) => {
		return family.base == family.stage0;
	},
	getMembers: (evoObject) => {
		const family = evoObject.evolutions[0]; 
		const members = Object.keys(family).reduce((acc, key) => { 
			if(key == 'base' || key == 'condition') return acc;
			return acc.concat(family[key])
		}, []);
		const whereCondition = QP.multiWhere('OR', 'stage0=', members);
		const queryString = QP.eachTable(tables.pid, whereCondition);
		console.log(queryString);

		return QP.query(tables.pid, queryString)
			.then((res) => {return res; })
			.catch((err) => {return err; });
	},
	format: (evoData) => {
		const evoList = evoData.evolutions;
		const memberList = evoList.reduce((list, member) => {
			if(list.indexOf(member.base) == -1) list.push(member.base);
			return list;
		}, []);
		return memberInfo.get(memberList)
			.then((memberInfo) => {return qEvo.processTree(memberInfo, evoList); })
			.catch((err) => { return err; });		
	},
	processTree: (memberInfo, evoList) => {
		let evoObject = { evolutions: { base: {}, next: [] } };

		// stage0 processing
		for(let i = 0; i < evoList.length; i++) {
			if(qEvo.isBaby(evoList[i])) {
				if(evoObject.evolutions['base'].unique_id == undefined) {
					evoObject.evolutions['base'].unique_id = evoList[i].stage0;
					evoObject.evolutions['base'].condition = evoList[i].condition;
					Object.assign(evoObject.evolutions['base'], memberInfo[evoList[i].base]);
				}
				qEvo.processStage1(evoList[i].stage1, evoList[i].stage2, memberInfo, evoList, evoObject);
			}
		}
		return evoObject;
	},
	processStage1: (stage1,stage2,  memberInfo, evoList, evoObject) => {
		if(stage1 == null) return evoObject;

		for(let i = 0; i < evoList.length; i++) {
			if(evoList[i].base == stage1) {
				// Checks if the next evolution exists already to prevent dupes
				if(evoObject.evolutions.next.filter(nextEvo => nextEvo.unique_id == evoList[i].base).length == 0) {
					const stage = {
						unique_id: evoList[i].base,
						condition: evoList[i].condition
					}
					Object.assign(stage, memberInfo[evoList[i].base], { next: [] })
					evoObject.evolutions.next.push(stage);
				} 
				evoObject = qEvo.processStage2(stage2, memberInfo, evoList, evoObject);
			}
		}	
		return evoObject;
	},
	processStage2: (stage2, memberInfo, evoList, evoObject) => {
		if(stage2 == null) return evoObject;

		for(let i = 0; i < evoList.length; i++) {
			if(evoList[i].base == stage2) {
				const currentEvoIndex = evoObject.evolutions.next.length - 1;
				if(evoObject.evolutions.next[currentEvoIndex].next.filter(nextEvo => nextEvo.unique_id == evoList[i].base).length == 0) {
					const stage = {
						unique_id: evoList[i].base,
						condition: evoList[i].condition
					}
					Object.assign(stage, memberInfo[evoList[i].base], { next: [] });
					evoObject.evolutions.next[currentEvoIndex].next.push(stage);
				} 
			}
		}
		return evoObject;
	}
};

const Model = {
	all: () => {
		const queryString = QP.eachTable(tables.all);

		return QP.query(tables.all, queryString)
			.then((res) => { return res; })
			.catch((err) => { return err; });
	},
	pid: (pid) => {
		const whereCondition = QP.whereCondition(`base='${pid}'`);
		const queryString = QP.eachTable(tables.pid, whereCondition);

		return qEvo.query(tables.pid, queryString)
			.then((res) => { return res; })
			.catch((err) => { return err; });
	}
};

module.exports = Model;

