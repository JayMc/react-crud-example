import React, { Component } from 'react'

export default React.createClass({
	getInitialState: function(){
		return {nameGiven: '', nameFamily: ''}
	},
	handleChangeNameGiven: function(e){
		this.setState({nameGiven: e.target.value})
	},
	handleChangeNameFamily: function(e){
		this.setState({nameFamily: e.target.value})
	},
	handleSubmit: function(e) {
		e.preventDefault()
		console.log(this.state)
	},
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<input type="text" 
					placeholder="sdfsd"
					value={this.nameGiven}
					onChange={this.handleChangeNameGiven} />
				<input type="text" 
					placeholder="sdfsd"
					value={this.nameFamily}
					onChange={this.handleChangeNameFamily} />
				<button>Submit</button>
			</form>
		)
	}
})