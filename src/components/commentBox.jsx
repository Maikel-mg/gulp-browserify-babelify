/*jshint esnext: true */
var React = require('react');
var CommentList = require('./commentList.jsx');
var CommentForm = require('./commentForm.jsx');

class CommentBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data : props.data
    };
  }
  render () {
    return <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm />
    </div>;
  }
}

module.exports = CommentBox;
