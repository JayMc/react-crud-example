import React, { Component } from 'react';

export default React.createClass({
  getInitialState: function () {
    return { title: '', body: '' };
  },

  handleChangeTitle: function (e) {
    this.setState({ title: e.target.value });
  },

  handleChangeBody: function (e) {
    this.setState({ body: e.target.value });
  },

  handleSubmit: function (e) {
    e.preventDefault();
    this.props.addPost(this.state);

  },

  render() {
    return (
			<form onSubmit={this.handleSubmit}>
				<input type="text"
					placeholder="sdfsd"
					value={this.title}
					onChange={this.handleChangeTitle} />

				<textarea type="text"
					placeholder="sdfsd"
					onChange={this.handleChangeBody} >
					{this.body}
				</textarea>
				<button>Submit</button>
			</form>
		);
  },
});
