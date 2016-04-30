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
		// "listItemPath" attribute passes the path that should be applied to the end child list item - it then gets suffixed with the author id
		// this way ListItem stays generic
		return(
			<div>
				<p>Authors</p>
				<List listItemPath="authors/author" data={this.state.authors} />
				<Count total={this.totalAuthors()} />
			</div>

		)

	}
})