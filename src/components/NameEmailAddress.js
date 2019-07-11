
//In the first step, the user should input their name, company, and work email address. 
//Free email services like Gmail and Yahoo should not be allowed. All of these fields should be required.

import React, { Component } from 'react';


class NameEmailAddress extends Component {
	render(){
		return (
			<section>
				Name: <input onChange={this.props.onFormChange} type="text" id="name" value={this.props.name}/>
				Company: <input onChange={this.props.onFormChange} type="text" id="company" value={this.props.company}/>
				Email: <input onChange={this.props.onFormChange} type="email" id="email"  value={this.props.email}/>
			</section>
		)
	}
}
export default NameEmailAddress;
