import React from 'react';

export default React.createClass({
	render(){
		self = this
		let employee = this.props.employees.filter(function(employee){
			if(employee.id == self.props.params.id) return employee
		})[0]
		console.log(employee)
		return (
			<div>
				<h3>Post details</h3>
				<p>{employee.nameGiven}</p>
			</div>
		)
	}
})