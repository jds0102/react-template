//app.js

import React from 'react';
import ReactDOM from 'react-dom';

let VideoList = require('./VideoList');

ReactDOM.render(
  <VideoList name='test' />,
  document.getElementById('react-container')
);