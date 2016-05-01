import React from 'react';

export default React.createClass({
  render() {
    return (
			<div>
				<h3>Author details</h3>
				<p>{this.props.author.name}</p>
			</div>
		);
  },
});
