import React, { Component } from 'react';
import './frame.scss';

class Frame extends Component {
	render() {
		return <div className='frame'>
			<div className='lights'>
				<div className='light large'></div>
				<div className='smallLights'>
					<div className='light small red'></div>
					<div className='light small yellow'></div>
					<div className='light small green'></div>
				</div>
			</div>
			<div className='screen'>
				{this.props.children}
			</div>
		</div>;
	}
}

export default Frame;