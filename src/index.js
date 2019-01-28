import React from "react";
import ReactDOM from "react-dom";
import Comment from "./comment";
import Reply from "./reply";

const App = () => {
  return (
    <div className="ui container comments">
    <Comment 
    author="Cazzandra" 
    msg="Can you give me money" 
    date="Yesterday 19.41" 
    avatar="https://semantic-ui.com/images/avatar/small/jenny.jpg" />

    <Comment 
    author="Marcus" 
    msg="Sure" 
    date="Today 12.13" 
    avatar="https://semantic-ui.com/images/avatar/small/steve.jpg" />

    <Comment 
    author="Cazzandra" 
    msg="Thank you!" 
    date="Just now" 
    avatar="https://semantic-ui.com/images/avatar/small/jenny.jpg" />
    <Reply />
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
