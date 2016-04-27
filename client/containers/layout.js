import React, { Component } from 'react'
import { Link } from 'react-router'


export default React.createClass({
	render() {
		return(
			<div>
				<h1>Header</h1>

				<ul role="nav">
		          <li><Link to="/posts">Posts</Link></li>
		          <li><Link to="/authors">Authors</Link></li>
		        </ul>

				{this.props.children}
				<p>footer</p>
			</div>
		)
	}
})