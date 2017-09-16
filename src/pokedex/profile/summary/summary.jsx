import React, { Component } from 'react';
import {connect} from 'react-redux';

import SubHeader from '../subHeader/subHeader.jsx';
import Sprite from '../sprite/sprite.container.jsx';
import TypeBadge from '../typeBadge/typeBadge.jsx';
import Stats from './stats.jsx';
import './summary.scss';

class Summary extends Component {
	constructor(props) {
		super(props);
	}
	renderGeneral() {
		return <div className='general'>
			<SubHeader text={this.props.general.species}/>
			{this.renderGeneralRow('weight', this.props.general.weight)}
			{this.renderGeneralRow('height', this.props.general.height)}
			{this.renderGeneralRow('abilities', this.props.abilities)}

		</div>
	}
	renderGeneralRow(header, data) {
		const dataElement = this.renderGeneralRowData(data);
		return <div className='row'>
			<div className='header'>{header}</div>
			<div className='data'>
				{dataElement}
			</div>
		</div>
	}
	renderGeneralRowData(data) {
		if(typeof data === 'string') return <div>{data}</div>
		return data.map((node, index) => {
			return <div key={index}>{node}</div>
		})
	}
	renderStats() {
		return <Stats baseStats={this.props.baseStats}
				minStats={this.props.minStats}
				maxStats={this.props.maxStats}
				types={this.props.types}/>;
	}
	renderEntry() {
		return <div className='entry'>
			<SubHeader text='entry' />
			<div className='data'>
				{this.props.entry}
			</div>
		</div>
	}
	render() {
		return <div className='summary'>
			<Sprite/>
			{this.renderGeneral()}
			{this.renderStats()}
			{this.renderEntry()}
		</div>
	}
}

export default Summary;