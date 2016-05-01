import React from 'react';
import ViewAuthor from '../components/viewAuthor';
import Authors from './Authors';

export default React.createClass({
  getInitialState() {

    // pretend to get a single author form remote data
    let authors = [
      { id: 1, name: 'Superman' },
      { id: 2, name: 'Batman' },
      { id: 3, name: 'Steve' },
    ];

    let author = authors.filter((a) => {
      if (a.id == this.props.params.id) return a;
    })[0];
    return { author, author };
  },

  render() {
    return (
			<div>
				<p>Author</p>
        <ViewAuthor author={this.state.author} />
        <Authors />
			</div>
    );
  },
});
