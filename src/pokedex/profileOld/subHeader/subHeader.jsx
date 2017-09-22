import React, { Component } from 'react';

// import { sanitize } from '../../../utils.js';
import './subHeader.scss';

class SubHeader extends Component {
	sanitizeText(str) {
		return str.toLowerCase().replace(' pokémon', '');
	}	
	render() {
		return <div className='subHeader'>
			{this.sanitizeText(this.props.text)}
		</div>
	}
}

export default SubHeader;