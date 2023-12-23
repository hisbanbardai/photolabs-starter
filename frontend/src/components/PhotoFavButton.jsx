import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  function handleClick() {
    setIsSelected(!isSelected);
  }
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isSelected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
