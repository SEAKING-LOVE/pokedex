import React, { Component } from 'react';
import {connect} from "react-redux";

import './typeBadge.scss';

class TypeBadge extends Component {
	render() {
		return  <div className={`typeBadge ${this.props.type.toLowerCase()}`}>
			{this.props.type}
		</div>;
	}
}

export default TypeBadge;
