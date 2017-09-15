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
		const headers = [ 'weight', 'height', 'abilities'];
		return <div className='general'>
			{this.renderGeneralData(headers)}
			{this.renderGeneralHeaders(headers)}
		</div>
	}
	renderGeneralHeaders(headers) {
		const headerElements = headers.map((header, index) => {
			return <div key={index} className='title'>{header}</div>
		});
		return <div className='row'>{headerElements}</div>
	}
	renderGeneralData(desiredHeaders) {
		const dataElements = desiredHeaders.reduce((acc, header) => {
			if(desiredHeaders.indexOf(header) !== -1 && this.props.general[header]) {
				acc.push(<div key={header}>{ this.props.general[header] }</div>)
			}
			return acc;
		}, []);
		return <div className='row'>			
			{dataElements}
			<div> {this.renderAbilities()} </div>
		</div>
	}
	renderAbilities() {
		return  this.props.abilities.map((ability, index) => {
			return <div key={index}>{ability}</div>
		})
	}
	renderStats() {
		return <Stats baseStats={this.props.baseStats}
				minStats={this.props.minStats}
				maxStats={this.props.maxStats}
				types={this.props.types}/>;
	}
	
	render() {
		return <div className='summary'>
			{this.renderGeneral()}
			{this.renderStats()}
		</div>
	}
}

export default Summary;