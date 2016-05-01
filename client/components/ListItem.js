import React, {Component} from 'react';
import { Link } from 'react-router';

export default React.createClass({
  displayTitle() {
    if (this.props.data.title) return this.props.data.title;
    else if (this.props.data.name) return this.props.data.name;
    else return 'unknown';
  },

  path() {
    return this.props.listItemPath + '/' + this.props.data.id;
  },

  render() {
    const path = this.props.path + this.props.data.id;
    return (
			<li  >
				<Link to={this.path()} >{this.displayTitle()}</Link>
			</li>
    );
  },

});
