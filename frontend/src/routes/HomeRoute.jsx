import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = ({ openModal }) => {
  const [favourites, addFavourites] = useState([]);

  function storeFavourites(photo) {
    addFavourites((prevFavourites) => [...prevFavourites, photo]);
  }

  // function storeFavourites(photo) {
  //   console.log("Before", favourites);
  //   addFavourites((prevFavourites) => {
  //     if (prevFavourites.includes(photo)) {
  //       // If photo is already in favourites, remove it by filtering it out
  //       return prevFavourites.filter((favPhoto) => favPhoto !== photo);
  //     } else {
  //       // If photo is not in favourites, add it to the array
  //       return [...prevFavourites, photo];
  //     }
  //   });
  // }

  console.log(favourites);
  console.log(favourites.length);

  return (
    <div className="home-route">
      <TopNavigation favouritesCount={favourites.length} />
      <PhotoList storeFavourites={storeFavourites} openModal={openModal} />
    </div>
  );
};

export default HomeRoute;
