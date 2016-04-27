import React, { Component } from 'react'
import ListPosts from '../components/ListPosts'
import FormPost from '../components/FormPost'
import fetch from 'isomorphic-fetch'
import {Router, Route, hashHistory} from 'react-router'

export default React.createClass({
	getInitialState() {
		return {employees: [{id: 1, nameGiven: 'nothing'}] }
	},
	componentDidMount() {
		this.refresh()	
	},
	refresh() {
		fetch('http://localhost:3000/employees')
			.then(req => req.json())
			.then(json => this.setState({employees: json}) )
	},
	handleRefreshButton(){
		this.refresh()
	},
	render(){

		return (
			<div>
				<FormPost />
				<button onClick={this.handleRefreshButton}>Refresh</button>
				<ListPosts data={this.state.employees} />
			</div>
		)
		
	}
})