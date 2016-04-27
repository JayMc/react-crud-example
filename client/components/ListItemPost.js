import React, {Component} from 'react'

export default React.createClass({
	render: function(){

		return(
			<li>{this.props.data.nameGiven}</li>
			)
	}
})