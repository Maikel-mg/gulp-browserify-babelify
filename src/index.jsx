/*jshint esnext:true */
var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./components/commentBox.jsx');
var data = require('./data.js');

const mountNode = document.getElementById('root');

ReactDOM.render(
  <CommentBox data={data}/>,
  mountNode
);
