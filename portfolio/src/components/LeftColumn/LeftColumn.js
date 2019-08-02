import React from "react";
import "./LeftColumn.scss";

import githubImage from "../../images/github.svg";
import twitterImage from "../../images/twitter.svg";
import emailImage from "../../images/email.svg";

class LeftColumn extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="navigation-container">
        <h2>JE</h2>
        <a target="_blank" href="https://github.com/joerlop">
          <div className="nav-item">
            <img src={githubImage} alt="github icon" />
            <h2>Github</h2>
          </div>
        </a>
        <div className="nav-item" />
        <div className="nav-item" />
      </div>
    );
  }
}

export default LeftColumn;
