import React from "react";
import "./CenterColumn.scss";

function TweetHeader(props) {
  return (
    <div className="tweet-header">
      <p className="paragraph-desktop">
        Jonathan Erlich <span>@JonathanErlichL · {props.date}</span>
      </p>
      <p className="paragraph-mobile">
        Jonathan E. <span>@JEL · {props.date}</span>
      </p>
    </div>
  );
}

export default TweetHeader;
