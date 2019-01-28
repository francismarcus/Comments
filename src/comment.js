import React from "react";

export default class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img
            class="ui avatar image"
            src={this.props.avatar}
          />
        </a>
        <div className="content">
          <a href="/" className="author">
            {this.props.author}
          </a>
          <div className="metadata">
            <span className="date">{this.props.date}</span>
          </div>
          <div className="text">{this.props.msg}</div>
        </div>
      </div>
    );
  }
}
// this.props.author
// this.props.date
// this.props.msg
// "https://semantic-ui.com/images/avatar/small/jenny.jpg"