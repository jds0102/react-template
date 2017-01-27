import React from 'react';

var VideoList = React.createClass({

	propTypes: {
		name: React.PropTypes.string
	},

	render: function() {
		return <h1>Hello, {this.props.name}</h1>;
	}
});

module.exports = VideoList;