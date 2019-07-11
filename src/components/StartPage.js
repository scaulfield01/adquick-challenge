
//The root path should be a welcome page with a button to start the onboarding process.

import React, { Component } from 'react';


class StartPage extends Component {
	render(){
		return (<button onClick={this.props.handleinitialStartClick}>click here to start</button>)
	}
}
export default StartPage;
