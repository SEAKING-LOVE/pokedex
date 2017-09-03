const QP = require('./qp.js');
const schema = require('./schema.js');

const tables = {
	all: ['evolutions'],
	pid: ['evolutions'],
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
		// const whereCondition = QP.multiWhere('OR', 'base=', members);
		const whereCondition = QP.multiWhere('OR', 'stage0=', members);
		const queryString = QP.eachTable(tables.pid, whereCondition);

		return QP.query(tables.pid, queryString)
			.then((res) => {return res; })
			.catch((err) => {return err; });
	},
	format: (evoData) => {
		const evoList = evoData.evolutions;
		let evoObject = { evolutions: { base: {}, next: [] } };

		// testing using http://localhost:3001/api/v1/evolutions/pid/n265
		// the data is wrong though, it's missing, for example, base n268, n269
		// http://localhost:3001/api/v1/evolutions/pid/n266
		// should give same result as n265, but it doesn't
		// also, look at Eevee's
		// testing using http://localhost:3001/api/v1/evolutions/pid/n133

		// basically I think what needs to happen is we want qEvo.stages to return
		// the result of select * from pokedex.evolutions where stage0='n133';
		// I think this should work 
		// can you try it? gonna sleep now, but I believe that based on how I
		// wrote this formatting function, just returning the result of that
		// query should suffice

		// TODO
		// 1) ^ that
		// 2) add 'main' information for each evolution
		// 3) add 'type' information for each evolution

		// stage0 processing
		for(let i = 0; i < evoList.length; i++) {
			if(evoList[i].base === evoList[i].stage0) {
				if(evoObject.evolutions['base'].unique_id == undefined) {
					evoObject.evolutions['base'].unique_id = evoList[i].stage0;
					evoObject.evolutions['base'].condition = evoList[i].condition;
				}

				// stage1 processing
				if(evoList[i].stage1 != null) {
					for(let j = 0; j < evoList.length; j++) {
						if(evoList[j].base == evoList[i].stage1) {
							console.log(evoList[j].base)
							// Checks if the next evolution exists already to prevent dupes
							if(evoObject.evolutions.next.filter(nextEvo => nextEvo.unique_id == evoList[j].base).length == 0) {
								evoObject.evolutions.next.push({
									unique_id: evoList[j].base,
									condition: evoList[j].condition,
									next: []
								});
							} 

							//stage 2 processing 
							if(evoList[i].stage2 != null) { 
								for(let k = 0; k < evoList.length; k++) {
									if(evoList[k].base == evoList[i].stage2) {
										console.log(evoList[k].base)
										const currentEvoIndex = evoObject.evolutions.next.length - 1;
										if(evoObject.evolutions.next[currentEvoIndex].next.filter(nextEvo => nextEvo.unique_id == evoList[k].base).length == 0) {
											evoObject.evolutions.next[currentEvoIndex].next.push({
												unique_id: evoList[k].base,
												condition: evoList[k].condition
											});
										} 
									}
								}
							}
						}
					}	
				}
			}
		}
		
		// return evoData;
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

