/*jshint esnext: true */
var React = require('react');
var Marked = require('../libs/marked.min.js');

class Comment extends React.Component {
  render () {
    return <div className="comment">
      <h2 className="commentAuthor">
        {this.props.author}
      </h2>
      <span dangerouslySetInnerHTML={this.rawMarkup()} />
    </div>;
  }
  rawMarkup () {
    var rawMarkup = Marked(this.props.children.toString(), {sanitize:true});
    return { __html : rawMarkup };
  }
}

module.exports = Comment;
