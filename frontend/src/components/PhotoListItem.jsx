import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  location,
  imageSource,
  username,
  profile,
  storeFavourites,
  openModal,
  selectPhoto,
}) => {
  const photoData = {
    location,
    imageSource,
    username,
    profile,
  };

  return (
    <section className="photo-list__item">
      {/* <PhotoFavButton
        onClick={() =>
          storeFavourites({ location, imageSource, username, profile })
        }
      /> */}
      <PhotoFavButton storeFavourites={storeFavourites} photoData={photoData} />
      <img
        src={imageSource.regular}
        className="photo-list__image"
        onClick={() => {
          openModal();
          selectPhoto(photoData);
        }}
      />
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
