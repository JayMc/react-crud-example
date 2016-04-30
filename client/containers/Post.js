import React, { Component } from 'react'
import ListPosts from '../components/ListPosts'
import FormPost from '../components/FormPost'
import fetch from 'isomorphic-fetch'
import {Router, Route, hashHistory} from 'react-router'

export default React.createClass({
	getInitialState() {
		return {posts: [{id: 1, nameGiven: 'Superman'},
							{id: 2, nameGiven: 'Batman'},
							{id: 3, nameGiven: 'Steve'}] }
	},
	componentDidMount() {
		this.refresh()	
	},
	refresh() {
		// fetch('http://localhost:3000/posts')
		// 	.then(req => req.json())
		// 	.then(json => this.setState({posts: json}) )
	},
	handleRefreshButton(){
		this.refresh()
	},
	render(){
		let posts = this.state.posts
		// console.log(posts)
		const childrenWithProps = React.Children.map(this.props.children, function(child){
			// console.log(posts)
			return React.cloneElement(child, {posts: posts})
		})
		return (
			<div>
				{childrenWithProps}
				<button onClick={this.handleRefreshButton}>Refresh</button>
				<ListPosts data={this.state.posts} />
			</div>
		)
		
	}
})