import React, {Component} from 'react';
import ListItemPost from './ListItemPost';

export default React.createClass({

  render: function () {
    let data = this.props.data;

    let postNodes = data.map( (post) => {
      return (
				<ListItemPost key={post.id} data={post} />
			);
    });

    return (
			<ul>
				{postNodes}
			</ul>
		);
  },
});
