import React from "react";
import ReactDOM from "react-dom";
import Comment from "./comment";

const App = () => {
  return (
    <div className="ui container comments">
      <h1 className="ui teal header">Comments</h1>
    <Comment />
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
