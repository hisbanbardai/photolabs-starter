import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = ({
  state,
  openModal,
  selectPhoto,
  selectTopic,
  storeFavourites,
}) => {
  return (
    <div className="home-route">
      <TopNavigation
        state={state}
        selectTopic={selectTopic}
        favouritesCount={state.favourites.length}
      />
      <PhotoList
        photoData={state.photoData}
        storeFavourites={storeFavourites}
        openModal={openModal}
        selectPhoto={selectPhoto}
        favourites={state.favourites}
      />
    </div>
  );
};

export default HomeRoute;
