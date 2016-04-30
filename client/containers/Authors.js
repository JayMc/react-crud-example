import React from 'react';
import List from '../components/List';
import Count from '../components/Count';

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
	totalAuthors() {
		return this.state.authors.length
	},
	render(){
		// this one uses a generic dumb list that we pass data into from this smart container
		return(
			<div>
				<p>Authors</p>
				<List data={this.state.authors} />
				<Count total={this.totalAuthors()} />
			</div>

		)

	}
})