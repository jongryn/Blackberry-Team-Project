import React from "react";
import "./TrvBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const TrvBtn = props => (
<div>
  <a href="https://opentdb.com/api.php?amount=10" target="_blank" rel="noopener noreferrer"> 
  <button style={{ float: "center" }} className="btn btn-success">
    Play Trivia Game
  </button></a>
</div>
);

export default TrvBtn;
