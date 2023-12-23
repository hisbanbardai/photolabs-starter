import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = () => {
  const renderPhotos = photos.map((photo) => {
    return (
      <li key={photo.id}>
        <PhotoListItem
          location={photo.location}
          imageSource={photo.urls.regular}
          username={photo.user.name}
          profile={photo.user.profile}
        />
      </li>
    );
  });

  return <ul className="photo-list">{renderPhotos}</ul>;
};

export default PhotoList;
