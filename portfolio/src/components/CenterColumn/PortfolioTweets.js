import React from "react";
import "./CenterColumn.scss";
import profileImage from "../../images/jonathan.jpg";
import diarioLogo from "../../images/diario3.jpg"

import TweetProfilePic from "./TweetProfilePic";
import TweetHeader from "./TweetHeader";
import TweetSocial from "./TweetSocial";

class PortfolioTweets extends React.Component {
  convertToLink = (href, message) => {
    return (
      <a target="_blank" href={href}>
        {message}
      </a>
    );
  };

  render() {
    return (
      <>
        <div className="tweet">
          <div className="tweet-upper">
            <TweetProfilePic />
            <div className="tweet-content">
              <TweetHeader date="June 2 2019 - July 6, 2019" />
              <div className="tweet-message">
                <p>
                  Built my first app (solo) since joining Lambda School in
                  March.
                  <br />
                  <br />
                  {this.convertToLink("https://wearediario.com/", "Diario")} is
                  a simple, fun and private diary built on{" "}
                  {this.convertToLink("https://blockstack.org/", "#Blockstack")}{" "}
                  using web 3.0 principles - we will never have access to what
                  you write.
                  <br />
                  <br />
                  Built with: React, Redux, GSAP and Blockstack.
                  <br />
                  <br />
                  More project info. (including inspiration){" "}
                  {this.convertToLink(
                    "https://devpost.com/software/diario",
                    "here"
                  )}.
                </p>
                <img src={diarioLogo} />
              </div>
            </div>
          </div>
          <TweetSocial likes={100} />
        </div>
      </>
    );
  }
}

export default PortfolioTweets;
