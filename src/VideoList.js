import React from 'react';

var async = require('./async');

var VideoList = React.createClass({

	propTypes: {
		name: React.PropTypes.string
	},

	componentWillMount: function() {
		async.getVideos()
			.then((res) => {
				console.log(res);
			})
	},

	render: function() {
		return <h1>Hello, {this.props.name}</h1>;
	}
});

module.exports = VideoList;