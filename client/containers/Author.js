import React from 'react';

export default React.createClass({
	render(){
		return(
			<div>
				<p>Authors</p>
				{this.props.children}
			</div>

		)

	}
})