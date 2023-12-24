import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = ({
  storeFavourites,
  openModal,
  selectPhoto,
  clickFavBtn,
  isFavSelected,
}) => {
  const renderPhotos = photos.map((photo) => {
    return (
      <li key={photo.id}>
        <PhotoListItem
          location={photo.location}
          imageSource={photo.urls}
          username={photo.user.name}
          profile={photo.user.profile}
          storeFavourites={storeFavourites}
          openModal={openModal}
          selectPhoto={selectPhoto}
          clickFavBtn={clickFavBtn}
          isFavSelected={isFavSelected}
        />
      </li>
    );
  });

  return <ul className="photo-list">{renderPhotos}</ul>;
};

export default PhotoList;
