import React, { Component } from 'react'
import ListPosts from '../components/ListPosts'
import FormPost from '../components/FormPost'
import fetch from 'isomorphic-fetch'
import {Router, Route, hashHistory} from 'react-router'

export default React.createClass({
	getInitialState() {
		return {employees: [{id: 1, nameGiven: 'Superman'},
							{id: 2, nameGiven: 'Batman'},
							{id: 3, nameGiven: 'Steve'}] }
	},
	componentDidMount() {
		this.refresh()	
	},
	refresh() {
		// fetch('http://localhost:3000/employees')
		// 	.then(req => req.json())
		// 	.then(json => this.setState({employees: json}) )
	},
	handleRefreshButton(){
		this.refresh()
	},
	render(){
		let employees = this.state.employees
		// console.log(employees)
		const childrenWithProps = React.Children.map(this.props.children, function(child){
			// console.log(employees)
			return React.cloneElement(child, {employees: employees})
		})
		return (
			<div>
				{childrenWithProps}
				<button onClick={this.handleRefreshButton}>Refresh</button>
				<ListPosts data={this.state.employees} />
			</div>
		)
		
	}
})