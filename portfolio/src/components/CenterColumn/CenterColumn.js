import React from "react";
import "./CenterColumn.scss";
import { Route, NavLink } from "react-router-dom";

import profileImage from "../../images/jonathan.jpg";
import { ReactComponent as CalendarIcon } from "../../images/calendar.svg";

import PortfolioTweets from "./PortfolioTweets";
import CVTweets from "./CVTweets";

class CenterColumn extends React.Component {
  render() {
    return (
      <>
        <div className="profile-container">
          <div className="title">
            <h1>Welcome!</h1>
          </div>

          <div className="images">
            <div className="profile-image">
              <img src={profileImage} />
            </div>
          </div>

          <div className="profile">
            <div className="name">
              <h1>Jonathan Erlich</h1>
              <p>@JonathanErlichL</p>
            </div>
            <div className="bio">
              <p>
                Entrepreneur (
                <a target="_blank" href="https://www.instagram.com/shakin_col/">
                  Shakin'
                </a>
                {" | "}
                <a
                  target="_blank"
                  href="https://www.instagram.com/rosanegrataqueria/"
                >
                  Rosanegra
                </a>
                {" | "}
                <a target="_blank" href="https://www.instagram.com/somos.humo/">
                  Humo
                </a>
                ). Coder. Interested in crypto and fintech.
              </p>
            </div>
            <div className="date">
              <CalendarIcon className="calendar" />
              <p>Joined May 2010</p>
            </div>
            <div className="stats">
              <p>
                150 <span>Following</span>
              </p>
              <p>
                21M <span>Followers</span>
              </p>
            </div>
          </div>
        </div>

        <div className="tweets-container">
          <div className="header">
            <div className="cv">
              <NavLink
                exact
                to="/"
                className="header-link"
                activeStyle={{
                  color: "#1a91da",
                  borderBottom: "2px solid #1a91da"
                }}
              >
                CV
              </NavLink>
            </div>
            <div className="portfolio">
              <NavLink
                exact
                to="/portfolio"
                className="header-link"
                activeStyle={{
                  color: "#1a91da",
                  borderBottom: "2px solid #1a91da"
                }}
              >
                Portfolio
              </NavLink>
            </div>
          </div>

          <div className="tweets">
            <Route exact path="/" render={routeProps => <CVTweets />} />
            <Route exact path="/portfolio" render={routeProps => <PortfolioTweets />} />
          </div>
        </div>
      </>
    );
  }
}

export default CenterColumn;
