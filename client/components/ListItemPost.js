import React, {Component} from 'react'
import { Link } from 'react-router'

export default React.createClass({
	render: function(){

		return(
			<li key={this.props.data.id} >
				<Link to={"posts/post/"+this.props.data.id}>{this.props.data.title}</Link>
			</li>
			)
	}
})