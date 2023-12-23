import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ location, imageSource, username, profile }) => {
  return (
    <section className="photo-list__item">
      <PhotoFavButton />
      <img src={imageSource} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile" />
        <div>
          <span className="photo-list__user-info">{username}</span>
          <div>
            <span className="photo-list__user-info photo-list__user-location">
              {location.city}, {location.country}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;
