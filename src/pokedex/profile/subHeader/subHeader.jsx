import React, { Component } from 'react';

import './subHeader.scss';

class SubHeader extends Component {	
	render() {
		return <div className='subHeader'>
			{this.props.text}
		</div>
	}
}

export default SubHeader;