import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
  return (
    <li>
      <img src={imageSource} />
      <img src={profile} />
      <h2>{username}</h2>
      <h2>
        {location.city}, {location.country}
      </h2>
    </li>
  );
};

export default PhotoListItem;
