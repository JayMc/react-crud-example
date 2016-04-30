import React, {Component} from 'react'
import ListItemPost from './ListItemPost'

export default React.createClass({

	render: function(){
		let data = this.props.data

		let postNodes = data.map(function(post){
			return (
				<div >
					<ListItemPost data={post} />
				</div>
			)	
		})

		return (
			<ul>
				{postNodes}
			</ul>
		)
	}
})