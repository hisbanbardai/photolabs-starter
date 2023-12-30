import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = ({ state, openModal, selectPhoto, storeFavourites }) => {
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

  // console.log(state.favourites);
  // console.log(state.favourites.length);

  return (
    <div className="home-route">
      <TopNavigation state={state} favouritesCount={state.favourites.length} />
      <PhotoList
        photoData={state.photoData}
        storeFavourites={storeFavourites}
        openModal={openModal}
        selectPhoto={selectPhoto}
      />
    </div>
  );
};

export default HomeRoute;
