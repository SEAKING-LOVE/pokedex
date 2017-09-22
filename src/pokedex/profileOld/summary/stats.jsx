import React, { Component } from 'react';
import {connect} from 'react-redux';
import SubHeader from '../subHeader/subHeader.jsx';

import { typesToColors, sanitize } from '../../../utils.js';

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
		const statKeyPretty = sanitize(statKey);

		return <tr key={statKey}>
			<th>{statKeyPretty}</th>
			<td>{this.props.baseStats[statKey]}</td>
			<td className='gaugeContainer'>
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
		const gaugeStyle = {
			width: `${statValue / this.state.maxValue * 100}%`
		}
		const gaugeLight = { backgroundColor: this.gaugeColor(0.9) };
		const gaugeDark = { backgroundColor: this.gaugeColor() };

		return <div className='gauge' style={gaugeStyle}>
			<div style={gaugeLight}></div>
			<div style={gaugeDark}></div>
		</div>
	}
	gaugeColor(alpha=1.0) {
		return typesToColors(this.props.types, alpha)[0];
	}
	render() {
		return <div className='stats'>
			<SubHeader text='stats'/>
			<table>	
				<tbody>
					{this.renderStats()}
					{this.renderLastRow()}
				</tbody>
			</table>
		</div> 
			
	}
}

export default Stats;