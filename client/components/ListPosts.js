import React, {Component} from 'react'
import ListItemPost from './ListItemPost'

export default React.createClass({

	render: function(){
		// const data = [{id: 1, nameGiven: 'Pedro'}]
		let data = this.props.data
		console.log(data)

		let employeeNodes = data.map(function(employee){
			return (
				<ListItemPost key={employee.id} data={employee} />
			)	
		})

		return (
			<ul>
				{employeeNodes}
			</ul>
		)
	}
})