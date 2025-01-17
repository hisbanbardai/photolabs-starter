import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({
  state,
  closeModal,
  storeFavourites,
  selectPhoto,
}) => {
  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button
          className="photo-details-modal__close-button"
          onClick={() => closeModal(false)}
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>

      <div className="photo-details-modal__header">
        <PhotoFavButton
          storeFavourites={storeFavourites}
          photoData={state.selectedPhoto}
          favourites={state.favourites}
        />
        <img
          src={state.selectedPhoto.imageSource.full}
          alt=""
          className="photo-details-modal__image"
        />
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={state.selectedPhoto.profile}
            alt=""
          />
          <div>
            <span className="photo-details-modal__photographer-info">
              {state.selectedPhoto.username}
            </span>
            <div>
              <span className="photo-details-modal__photographer-location photo-details-modal__photographer-info">
                {state.selectedPhoto.location.city},{" "}
                {state.selectedPhoto.location.country}
              </span>
            </div>
          </div>
        </div>
        <h4>Similar Photos</h4>
      </div>
      <div className="photo-details-modal__images">
        <PhotoList
          photoData={state.photoData}
          storeFavourites={storeFavourites}
          openModal={closeModal}
          selectPhoto={selectPhoto}
          favourites={state.favourites}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
