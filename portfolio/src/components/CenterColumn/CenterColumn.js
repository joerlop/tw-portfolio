import React from "react";
import "./CenterColumn.scss";
import { NavLink } from "react-router-dom";

import profileImage from "../../images/jonathan.jpg";
import { ReactComponent as CalendarIcon } from "../../images/calendar.svg";

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
                </a>{" | "}
                <a
                  target="_blank"
                  href="https://www.instagram.com/rosanegrataqueria/"
                >
                  Rosanegra
                </a>{" | "}
                <a target="_blank" href="https://www.instagram.com/somos.humo/">
                  Humo
                </a>
                ). Coder. Interested in crypto and fintech.
              </p>
            </div>
            <div className="date">
              <CalendarIcon className="calendar"/>
              <p>Joined May 2010</p>
            </div>
            <div className="stats">
              <p>150 <span>Following</span></p>
              <p>1.5B <span>Followers</span></p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CenterColumn;
