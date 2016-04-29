import React, {Component} from 'react'
import ListItemPost from './ListItemPost'

export default React.createClass({

	render: function(){
		let data = this.props.data

		let employeeNodes = data.map(function(employee){
			return (
				<div >
					<ListItemPost data={employee} />
				</div>
			)	
		})

		return (
			<ul>
				{employeeNodes}
			</ul>
		)
	}
})