import React, { useEffect, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ storeFavourites, photoData, favourites }) {
  const checkPhotoFav = (photoId, favPhotos) => {
    return favPhotos.some((item) => item.id === photoId);
  };

  const [isSelected, setIsSelected] = useState(
    checkPhotoFav(photoData.id, favourites)
  );

  useEffect(() => {
    //This effect will run at first render and after that when photoData or favourites change
    setIsSelected(checkPhotoFav(photoData.id, favourites));
  }, [photoData, favourites]);

  function handleClick() {
    storeFavourites(photoData, isSelected);
    setIsSelected((prevIsSelected) => !prevIsSelected);
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isSelected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
