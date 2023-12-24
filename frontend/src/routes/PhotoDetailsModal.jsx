import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({ closeModal, selectedPhoto }) => {
  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button
          className="photo-details-modal__close-button"
          onClick={closeModal}
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>

      {console.log(selectedPhoto)}

      <div className="photo-details-modal__header">
        <PhotoFavButton />
        <img
          src={selectedPhoto.imageSource.full}
          alt=""
          className="photo-details-modal__image"
        />
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={selectedPhoto.profile}
            alt=""
          />
          <div>
            <span className="photo-details-modal__photographer-info">
              {selectedPhoto.username}
            </span>
            <div>
              <span className="photo-details-modal__photographer-location photo-details-modal__photographer-info">
                {selectedPhoto.location.city}, {selectedPhoto.location.country}
              </span>
            </div>
          </div>
        </div>
        <h4>Similar Photos</h4>
      </div>
      <div className="photo-details-modal__images">
        <PhotoList />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
