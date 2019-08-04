import React from "react";
import "./CenterColumn.scss";

import TweetProfilePic from "./TweetProfilePic";
import TweetHeader from "./TweetHeader";
import TweetSocial from "./TweetSocial";

class CVTweets extends React.Component {
  render() {
    return (
      <>
        <div className="tweet">
          <div className="tweet-upper">
            <TweetProfilePic />
            <div className="tweet-content">
              <TweetHeader date="Oct 31, 2008" />
              <div className="tweet-message">
                <p>
                  Unpopular? Opinion: #Bitcoin's biggest winners are going to be
                  the longest hodlers, not necessarily the early adopters...
                </p>
              </div>
            </div>
          </div>
          <TweetSocial />
        </div>
      </>
    );
  }
}

export default CVTweets;
