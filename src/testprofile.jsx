import React, { Component } from 'react';

class Test extends Component {
	render() {
		return <div className="Test">
			test profile ~~ woo	{this.props.params.id}	
			
		</div>;
	}
}

export default Test;