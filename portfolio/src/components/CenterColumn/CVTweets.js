import React from "react";
import "./CenterColumn.scss";

import TweetProfilePic from "./TweetProfilePic";
import TweetHeader from "./TweetHeader";
import TweetSocial from "./TweetSocial";

class CVTweets extends React.Component {
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
              <TweetHeader date="1990 - present" />
              <div className="tweet-message">
                <p>
                  (1/x): So… a little bit about the journey that has taken me
                  here… <br />A thread.
                </p>
              </div>
            </div>
          </div>
          <TweetSocial likes={100}/>
        </div>

        <div className="tweet">
          <div className="tweet-upper">
            <TweetProfilePic />
            <div className="tweet-content">
              <TweetHeader date="1990 - present" />
              <div className="tweet-message">
                <p>
                  (2/x): I was born in Israel, but just at the age of 4 my
                  parents decided to go back to Barranquilla, Colombia, where
                  they had lived before. Since then, I’ve lived in Colombia my
                  whole life.{" "}
                  {this.convertToLink(
                    "http://www.colombia.travel/en",
                    "#VivaColombia"
                  )}
                </p>
              </div>
            </div>
          </div>
          <TweetSocial likes={200}/>
        </div>

        <div className="tweet">
          <div className="tweet-upper">
            <TweetProfilePic />
            <div className="tweet-content">
              <TweetHeader date="2007-2012" />
              <div className="tweet-message">
                <p>
                  (3/x): After graduating from high school in 2007, I went to{" "}
                  {this.convertToLink(
                    "https://uniandes.edu.co/en",
                    "Universidad de Los Andes"
                  )}{" "}
                  to study{" "}
                  {this.convertToLink(
                    "https://industrial.uniandes.edu.co/en/undergraduate/about-abet",
                    "#IndustrialEngineering"
                  )}{" "}
                  (B.S.) and{" "}
                  {this.convertToLink(
                    "https://economia.uniandes.edu.co/programas-facultad-de-economia/pregrado-de-economia/descripcion-pregrado/descripcion-de-la-carrera-pregrado",
                    "#Economics"
                  )}{" "}
                  (B.S.). I graduated from both programs in 2012.
                </p>
              </div>
            </div>
          </div>
          <TweetSocial likes={300}/>
        </div>

        <div className="tweet">
          <div className="tweet-upper">
            <TweetProfilePic />
            <div className="tweet-content">
              <TweetHeader date="May, 2013 - Jan, 2015" />
              <div className="tweet-message">
                <p>
                  (4/x): The first job I landed after university was as a{" "}
                  {this.convertToLink(
                    "http://www.somosvirtus.com/people",
                    "#Consultant"
                  )}{" "}
                  at a Chilean management consulting firm called{" "}
                  {this.convertToLink(
                    "http://www.somosvirtus.com/",
                    "Virtus Partners"
                  )}
                  .
                  <br />
                  <br />
                  With them, I worked in two projects in Guayaquil, Ecuador:
                  <br />
                  <br />
                  <ul>
                    <li>
                      The first for a recognized bank - we designed a 5-year
                      strategic plan and an incentive system for the corporate
                      banking commercial force.
                    </li>
                    <li>
                      The second for an industrial conglomerate - we designed an
                      incentive system for top levels of the organization as
                      part of a broader succession process.
                    </li>
                  </ul>
                  <br />
                  It was an amazing experience, but after almost 2 years I
                  decided to go ahead and build my own company...
                </p>
              </div>
            </div>
          </div>
          <TweetSocial likes={400}/>
        </div>

        <div className="tweet">
          <div className="tweet-upper">
            <TweetProfilePic />
            <div className="tweet-content">
              <TweetHeader date="Jan, 2015 - Mar, 2019" />
              <div className="tweet-message">
                <p>
                  (5/x): As with most startups, we (me and two friends from
                  school) started small. With a $10k initial investment, at the
                  beginning it was just us and 2 other employees.
                  <br />
                  <br />
                  However, through hard work and sweat, we’ve been able to build
                  a profitable restaurant group (
                  {this.convertToLink(
                    "https://www.instagram.com/shakin_col/",
                    "Shakin'"
                  )}{" "}
                  |{" "}
                  {this.convertToLink(
                    "https://www.instagram.com/rosanegrataqueria/",
                    "Rosanegra"
                  )}{" "}
                  |{" "}
                  {this.convertToLink(
                    "https://www.instagram.com/somos.humo/",
                    "Humo"
                  )}
                  ) that now generates more than $2M in revenue and 50+ jobs.{" "}
                  {this.convertToLink("https://www.urbandictionary.com/define.php?term=Humble%20Brag", "#humblebrag")}
                  <br />
                  <br />
                  Through this amazing process, I:
                  <br />
                  <br />
                  <ul>
                    <li>
                      Negotiated credit facilities with banks to support growth.
                    </li>
                    <li>
                      Designed the organizational structure of the company
                      (including rules and responsibilities for every role).
                    </li>
                    <li>Built teams for each restaurant. </li>
                    <li>
                      Created incentive systems for every level of the company.
                    </li>
                    <li>
                      Lead brand design, social media strategy and marketing
                      efforts for each restaurant.
                    </li>
                    <li>Fried lots of fries and cleaned lots of tables.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <TweetSocial likes={500}/>
        </div>

        <div className="tweet">
          <div className="tweet-upper">
            <TweetProfilePic />
            <div className="tweet-content">
              <TweetHeader date="Mar, 2019 - present" />
              <div className="tweet-message">
                <p>
                  (6/x): Everything was going fine until 2017, when I fell (at
                  first gradually, then suddenly) through the{" "}
                  {this.convertToLink(
                    "https://www.lopp.net/bitcoin-information.html",
                    "#Bitcoin"
                  )}{" "}
                  rabbit hole. Since then, I’ve hardly been able to think about
                  anything else <span class="ec ec-smile" />.<br />
                  <br />
                  That’s why in March of 2019 I decided to join{" "}
                  {this.convertToLink(
                    "https://lambdaschool.com/",
                    "Lambda School"
                  )}
                  . I wanted to learn to code and work in Bitcoin full-time.
                </p>
              </div>
            </div>
          </div>
          <TweetSocial likes={600}/>
        </div>

        <div className="tweet">
          <div className="tweet-upper">
            <TweetProfilePic />
            <div className="tweet-content">
              <TweetHeader date="Mar, 2019 - present" />
              <div className="tweet-message">
                <p>
                  (7/x):{" "}
                  {this.convertToLink(
                    "https://lambdaschool.com/",
                    "Lambda School"
                  )}{" "}
                  has been an amazing experience all the way through.
                  <br />
                  <br />
                  Throughout this journey I’ve acquired some amazing skills (
                  {this.convertToLink(
                    "https://internetingishard.com/",
                    "#HTML"
                  )}
                  , {this.convertToLink("https://css-tricks.com/", "#CSS")},{" "}
                  {this.convertToLink(
                    "https://github.com/getify/You-Dont-Know-JS",
                    "#JavaScript"
                  )}
                  , {this.convertToLink("https://reactjs.org/", "#React")},{" "}
                  {this.convertToLink("https://redux.js.org/", "#Redux")},{" "}
                  {this.convertToLink("https://greensock.com/gsap/", "#GSAP")},{" "}
                  {this.convertToLink("https://nodejs.org/en/", "#Node.js")},{" "}
                  {this.convertToLink(
                    "https://www.postgresql.org/",
                    "#PostgreSQL"
                  )}
                  , {this.convertToLink("https://dev.mysql.com/", "#MySQL")},{" "}
                  {this.convertToLink("http://knexjs.org/", "#Knex")},{" "}
                  {this.convertToLink("https://blockstack.org/", "#Blockstack")}
                  ), but most importantly, I’ve learned how to acquire new ones.
                  <br />
                  <br />
                  Additionally, I would say that the most amazing thing about
                  this experience has been the people I’ve met. From incredibly
                  diverse backgrounds, I’m happy to be able to call most of them
                  friends.
                </p>
              </div>
            </div>
          </div>
          <TweetSocial likes={700}/>
        </div>
      </>
    );
  }
}

export default CVTweets;
