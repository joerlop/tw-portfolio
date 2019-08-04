import React from "react";
import "./CenterColumn.scss";

function TweetHeader(props) {
  return (
    <div className="tweet-header">
      <p>
        Jonathan Erlich <span>@JonathanErlichL · {props.date}</span>
      </p>
    </div>
  );
}

export default TweetHeader;
