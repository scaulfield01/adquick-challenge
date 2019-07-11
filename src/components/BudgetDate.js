
// In the third step, the user should input their budget and their ideal campaign start date. Both of these fields should be required.

import React, { Component } from 'react';

import DatePicker from "react-datepicker";


class BudgetDate extends Component {
	render(){
		return (
			<section>
				budget: $	<input onChange={this.props.onFormChange} id="budget" type="number" min="0.01" step="0.01" max="2500" value={this.props.budget} />
				Date: <input  onChange={this.props.onFormChange} type="text" id="date" value={this.props.date}/>
					      
			</section>
			)
	}
}
export default BudgetDate;