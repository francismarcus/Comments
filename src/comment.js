import React from "react";

export default class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img
            class="ui avatar image"
            src="https://semantic-ui.com/images/avatar/small/jenny.jpg"
          />
        </a>
        <div className="content">
          <a href="/" className="author">
            Marcus
          </a>
          <div className="metadata">
            <span className="date"> Today at 12.31</span>
          </div>
          <div className="text"> Nice Post!!</div>
        </div>
      </div>
    );
  }
}
