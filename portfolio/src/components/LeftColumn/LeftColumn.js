import React from "react";
import "./LeftColumn.scss";
import { NavLink } from "react-router-dom";

import { ReactComponent as CVLogo } from "../../images/cv.svg";
import { ReactComponent as PortfolioLogo } from "../../images/portfolio.svg";

class LeftColumn extends React.Component {
  constructor() {
    super();
    this.state = {
      github: false,
      twitter: false,
      email: false
    };
  }

  render() {
    return (
      <div className="navigation-container">
        <h1>JE</h1>
        <NavLink
          exact
          to="/"
          className="nav-item"
          activeStyle={{ color: "#1a91da", fill: "#1a91da" }}
        >
          <CVLogo className="logo" alt="cv icon" />
          <h2>CV</h2>
        </NavLink>
        <NavLink
          to="/portfolio"
          className="nav-item"
          activeStyle={{ color: "#1a91da", fill: "#1a91da" }}
        >
          <PortfolioLogo className="logo" alt="portfolio icon" />
          <h2>Portfolio</h2>
        </NavLink>

        {/*
        <a target="_blank" href="https://github.com/joerlop">
          <div className="nav-item">
            <GithubLogo className="logo" alt="github icon" />
            <h2>Github</h2>
          </div>
        </a>
        <a target="_blank" href="https://twitter.com/JonathanErlichL">
          <div className="nav-item">
            <TwitterLogo className="logo" alt="twitter icon" />
            <h2>Real Twitter</h2>
          </div>
        </a>
        <a target="_blank" href="mailto:jj.erlich155@gmail.com">
          <div className="nav-item">
            <EmailLogo className="logo" alt="email icon" />
            <h2>Contact</h2>
          </div>
        </a>
        */}
      </div>
    );
  }
}

export default LeftColumn;
