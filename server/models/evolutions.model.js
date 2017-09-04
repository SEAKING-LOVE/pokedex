const QP = require('./qp.js');
const schema = require('./schema.js');

const tables = {
	all: ['evolutions'],
	pid: ['evolutions'],
	memberInfo: ['main', 'types']
};

const memberInfo = {
	get: (members=[]) => {
		const whereCondition = QP.multiWhere('OR', 'unique_id=', members);
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
			.then(qEvo.stages)
			.then(qEvo.format)
			.catch((err) => { return err})
	},

	base: (tables, queryString) => {
		return QP.query(tables, queryString)
			.then((res) => { return res; })
			.catch((err) => {return err; });
	},
	isStage0: (family) => {
		return family.base == family.stage0;
	},
	stages: (evoObject) => {
		console.log('EVO OBJECT', evoObject)
		const family = evoObject.evolutions[0]; 
		const members = Object.keys(family).reduce((acc, key) => { 
			if(key == 'base' || key == 'condition') return acc;
			return acc.concat(family[key])
		}, []);
		const whereCondition = QP.multiWhere('OR', 'stage0=', members);
		const queryString = QP.eachTable(tables.pid, whereCondition);

		return QP.query(tables.pid, queryString)
			.then((res) => {return res; })
			.catch((err) => {return err; });
	},
	format: (evoData) => {
		const evoList = evoData.evolutions;
		let evoObject = { evolutions: { base: {}, next: [] } };
		let memberList = [];
		for(let i = 0; i < evoList.length; i++) {
			if(memberList.indexOf(evoList[i].base) == -1) {
				memberList.push(evoList[i].base);
			}
		}

		return memberInfo.get(memberList)
			.then((pokemonInfo) => { 
				// stage0 processing
				for(let i = 0; i < evoList.length; i++) {
					if(evoList[i].base === evoList[i].stage0) {
						if(evoObject.evolutions['base'].unique_id == undefined) {
							evoObject.evolutions['base'].unique_id = evoList[i].stage0;
							evoObject.evolutions['base'].condition = evoList[i].condition;
							Object.assign(evoObject.evolutions['base'], pokemonInfo[evoList[i].base]);
						}

						// stage1 processing
						if(evoList[i].stage1 != null) {
							for(let j = 0; j < evoList.length; j++) {
								if(evoList[j].base == evoList[i].stage1) {
									// Checks if the next evolution exists already to prevent dupes
									if(evoObject.evolutions.next.filter(nextEvo => nextEvo.unique_id == evoList[j].base).length == 0) {
										let nextStageInfo = {
											unique_id: evoList[j].base,
											condition: evoList[j].condition
										}
										Object.assign(nextStageInfo, pokemonInfo[evoList[j].base], { next: [] })
										evoObject.evolutions.next.push(nextStageInfo);
									} 
									//stage 2 processing 
									if(evoList[i].stage2 != null) { 
										for(let k = 0; k < evoList.length; k++) {
											if(evoList[k].base == evoList[i].stage2) {
												console.log(evoList[k].base)
												const currentEvoIndex = evoObject.evolutions.next.length - 1;
												if(evoObject.evolutions.next[currentEvoIndex].next.filter(nextEvo => nextEvo.unique_id == evoList[k].base).length == 0) {
													let nextStageInfo = {
														unique_id: evoList[k].base,
														condition: evoList[k].condition
													}
													Object.assign(nextStageInfo, pokemonInfo[evoList[k].base], { next: [] })
													evoObject.evolutions.next[currentEvoIndex].next.push(nextStageInfo);
												} 
											}
										}
									}
								}
							}	
						}
					}
				}
				return evoObject;
			})
			.catch((err) => { return err; });		
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

