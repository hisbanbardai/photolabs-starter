import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ storeFavourites, photoData }) {
  const [isSelected, setIsSelected] = useState(false);

  function handleClick() {
    // setIsSelected(isSelected ? false : true);
    setIsSelected((prevIsSelected) => (prevIsSelected ? false : true));
    storeFavourites(photoData);
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
