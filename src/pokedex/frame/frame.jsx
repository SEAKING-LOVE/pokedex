import React, { Component } from 'react';
import './frame.scss';

class Frame extends Component {
	render() {
		return <div className='frame'>

			<div className='screen'>
				{this.props.children}
			</div>
		</div>;
	}
}

export default Frame;