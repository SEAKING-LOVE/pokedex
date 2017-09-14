import React, { Component } from 'react';
import {connect} from 'react-redux';

import TypeBadge from '../typeBadge/typeBadge.jsx';
import Stats from './stats.jsx';
import './summary.scss';

class Summary extends Component {
	constructor(props) {
		super(props);
	}
	renderGeneral() {
		const headers = ['abilities', 'weight', 'height'];
		return <table>
			<tbody>
				{this.renderGeneralData(headers)}
				{this.renderGeneralHeaders(headers)}
			</tbody>
		</table>
	}
	renderGeneralHeaders(headers) {
		const headerElements = headers.map((header, index) => {
			return <th key={index}>{header}</th>
		});
		return <tr>{headerElements}</tr>
	}
	renderGeneralData(desiredHeaders) {
		const dataElements = desiredHeaders.reduce((acc, header) => {
			if(desiredHeaders.indexOf(header) !== -1 && this.props.general[header]) {
				acc.push(<td key={header}>{ this.props.general[header] }</td>)
			}
			return acc;
		}, []);
		return <tr>
			<td> {this.renderAbilities()} </td>
			{dataElements}
		</tr>
	}
	renderAbilities() {
		return  this.props.abilities.map((ability, index) => {
			return <div key={index}>{ability}</div>
		})
	}
	renderTypes() {
		const badges = this.props.types.map((type, index) => {
			return <TypeBadge  key={index} type={type}/>;
		});

		return <div className='types' > {badges} </div>;
	}
	renderStats() {
		return <Stats baseStats={this.props.baseStats}
				minStats={this.props.minStats}
				maxStats={this.props.maxStats} />;
	}
	renderForm() {
		return this.props.main.form !== '' ? ` | ${this.props.main.form}` : '';
	}
	render() {
		return <div className='summary'>
			<h1>{this.props.main.name}</h1>
			<div>{this.props.general.species + this.renderForm()}</div>
			{this.renderTypes()}
			{this.renderGeneral()}
			{this.renderStats()}
		</div>
	}
}

export default Summary;