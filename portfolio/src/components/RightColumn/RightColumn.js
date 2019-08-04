import React from "react";
import "./RightColumn.scss";
import { NavLink } from "react-router-dom";

import { ReactComponent as GithubIcon } from "../../images/github.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter.svg";
import { ReactComponent as EmailIcon } from "../../images/email.svg";
import { ReactComponent as LinkedinIcon } from "../../images/linkedin.svg";

class RightColumn extends React.Component {
  render() {
    return (
      <>
        <div className="youmightlike">
          <div className="youmight-item">
            <h1>You might like</h1>
          </div>
          <a target="_blank" href="https://github.com/joerlop">
            <div className="youmight-item item">
              <GithubIcon className="youmight-icon" alt="github icon" />
              GitHub
            </div>
          </a>
          <a target="_blank" href="https://twitter.com/JonathanErlichL">
            <div className="youmight-item item">
              <TwitterIcon className="youmight-icon" alt="twitter icon" />
              <h2>Twitter*</h2>
            </div>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/jonathanerlich/">
            <div className="youmight-item item">
              <LinkedinIcon className="youmight-icon" alt="twitter icon" />
              <h2>Linkedin</h2>
            </div>
          </a>
          <a target="_blank" href="mailto:jj.erlich155@gmail.com">
            <div className="youmight-item item last">
              <EmailIcon className="youmight-icon" alt="email icon" />
              <h2>Email</h2>
            </div>
          </a>
        </div>
      </>
    );
  }
}

export default RightColumn;
