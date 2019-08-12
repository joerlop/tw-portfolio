import React from "react";
import "./LeftColumn.scss";
import { NavLink } from "react-router-dom";

import { ReactComponent as BirdLogo } from "../../images/bird-logo.svg";
import { ReactComponent as CVLogo } from "../../images/cv.svg";
import { ReactComponent as PortfolioLogo } from "../../images/portfolio.svg";

class LeftColumn extends React.Component {

  render() {
    return (
      <div className="navigation-container">
        <NavLink
          exact
          to="/"
          className="nav-logo"
        >
          <BirdLogo className="logo bird" alt="bird icon" />
        </NavLink>
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
      </div>
    );
  }
}

export default LeftColumn;
