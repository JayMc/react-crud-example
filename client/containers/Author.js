import React from 'react';


export default React.createClass({
	getInitialState() {
	    return {
	        authors: [
	  		      {id: 1, name: 'Superman'},
	  		      {id: 2, name: 'Batman'},
	  		      {id: 3, name: 'Steve'}
	        ]  
	    };
	},
	render(){
		// this one uses a generic dumb list that we pass data into from this smart container
		return(
			<div>
				<p>Author</p>
			</div>

		)

	}
})