import React from "react";
import "./CenterColumn.scss";

import { ReactComponent as HeartIcon } from "../../images/like.svg";

class TweetSocial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 100
    }
  }

  render() {
    return (
      <div className="tweet-social">
        <HeartIcon className="heart-icon" />
        <p>{this.state.likes}</p>
      </div>
    );
  }
}

export default TweetSocial;
