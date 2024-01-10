import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({
  photoData,
  storeFavourites,
  openModal,
  selectPhoto,
  favourites,
}) => {
  const renderPhotos = photoData.map((photo) => {
    return (
      <li key={photo.id}>
        <PhotoListItem
          id={photo.id}
          location={photo.location}
          imageSource={photo.urls}
          username={photo.user.name}
          profile={photo.user.profile}
          storeFavourites={storeFavourites}
          openModal={openModal}
          selectPhoto={selectPhoto}
          favourites={favourites}
        />
      </li>
    );
  });

  return <ul className="photo-list">{renderPhotos}</ul>;
};

export default PhotoList;
