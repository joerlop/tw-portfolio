import React from "react";
import "./CenterColumn.scss";

import profileImage from "../../images/jonathan.jpg";

function TweetProfilePic() {
  return (
    <div className="profile-picture">
      <img src={profileImage} />
    </div>
  );
}

export default TweetProfilePic;
