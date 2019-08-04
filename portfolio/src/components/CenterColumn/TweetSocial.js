import React from "react";
import "./CenterColumn.scss";

import { ReactComponent as HeartIcon } from "../../images/heart.svg";
import { ReactComponent as HeartIconFilled } from "../../images/heart-filled.svg";

class TweetSocial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 100,
      liked: false
    };
  }

  like = () => {
    if (this.state.liked) {
      this.setState({
        likes: this.state.likes - 1,
        liked: !this.state.liked
      });
    } else {
      this.setState({
        likes: this.state.likes + 1,
        liked: !this.state.liked
      });
    }
  };

  render() {
    return (
      <div onClick={this.like} className="tweet-social">
        <div className="like">
          <div className="icon-container">
            {this.state.liked ? (
              <HeartIconFilled className="heart-icon-filled" />
            ) : (
              <HeartIcon className="heart-icon" />
            )}
          </div>
          <p className={`liked-${this.state.liked}`}>{this.state.likes}</p>
        </div>
      </div>
    );
  }
}

export default TweetSocial;
