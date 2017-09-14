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
		return <table>
			<tbody>
				{this.renderGeneralData()}
				{this.renderGeneralHeaders()}
			</tbody>
		</table>
	}
	renderGeneralHeaders() {
		const headers =  Object.keys(this.props.general).map((category, index) => {
			return <th key={index}>{category}</th>
		});
		return <tr>{headers}</tr>
	}
	renderGeneralData() {
		const data = Object.keys(this.props.general).map((category, index) => {
			return <td key={index}>{ this.props.general[category] }</td>
		});
		return <tr>{data}</tr>
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
	render() {
		return <div className='summary'>
			{this.renderTypes()}
			{this.renderGeneral()}
			{this.renderStats()}
		</div>
	}
}

export default Summary;