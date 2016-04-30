import React, { Component } from 'react'
import ListPosts from '../components/ListPosts'
import FormPost from '../components/FormPost'
import fetch from 'isomorphic-fetch'
import {Router, Route, hashHistory} from 'react-router'

export default React.createClass({
	getInitialState() {
		return {posts: [{id: 1, title: 'Clarks surprise', author_id: 1},
							{id: 2, title: 'Batwing repair receipt', author_id: 2},
							{id: 3, title: 'Digging holes in the scotland winter', author_id: 3}] }
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