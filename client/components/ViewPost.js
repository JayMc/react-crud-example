import React from 'react';

export default React.createClass({
	render(){
		self = this
		let post = this.props.posts.filter(function(post){
			if(post.id == self.props.params.id) return post
		})[0]
		console.log(post)
		return (
			<div>
				<h3>Post details</h3>
				<p>{post.title}</p>
			</div>
		)
	}
})