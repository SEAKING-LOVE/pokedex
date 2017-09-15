import React, { Component } from 'react';
import {connect} from 'react-redux';

import { typesToColors, respell } from '../../../utils.js';

class Stats extends Component {
	constructor() {
		super();
		this.state = { maxValue: 255 };
	}
	renderStats() {
		return Object.keys(this.props.baseStats).map((statKey) => {
			return this.renderStatRow(statKey)
		})
	}
	renderStatRow(statKey) {
		const statKeyPretty = respell(statKey);

		return <tr key={statKey}>
			<th>{statKeyPretty}</th>
			<td>{this.props.baseStats[statKey]}</td>
			<td className='gauge'>
				{this.renderStatGauge(this.props.baseStats[statKey])}
			</td>
			<td>{this.props.minStats[statKey]}</td>
			<td>{this.props.maxStats[statKey]}</td>
		</tr>
	}
	renderLastRow() {
		return <tr className='lastRow'>
			<th></th>
			<td></td>
			<td></td>
			<td>min</td>
			<td>max</td>
		</tr>
	}
	renderStatGauge(statValue) {
		const style = {
			width: `${statValue / this.state.maxValue * 100}%`,
			backgroundColor: this.gaugeColor()
		}
		return <div className={''} style={style}></div>
	}
	gaugeColor() {
		return typesToColors(this.props.types)[0];
	}
	render() {
		return <table className='stats'>
			<tbody>
				{this.renderStats()}
				{this.renderLastRow()}
			</tbody>
		</table>
	}
}

export default Stats;