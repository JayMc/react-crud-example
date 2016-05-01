import React from 'react';

export default React.createClass({
  render() {
    let post = this.props.posts.filter((post) => {
      if (post.id == this.props.params.id) return post;
    })[0];
    return (
			<div>
				<h3>Post details</h3>
				<p>{post.title}</p>
			</div>
		);
  },
});
