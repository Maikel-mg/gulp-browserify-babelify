/*jshint esnext: true */
var React = require('react');
var Comment = require('./comment.jsx');

class CommentList extends React.Component {
  render (){
    var commentNodes = this.props.data.map(function(comment){
      return (
        <Comment author={comment.author}>
            {comment.text}
        </Comment>
      );
    });

    return <div className="CommentList">
        {commentNodes}
    </div>;
  }
}

module.exports = CommentList;
