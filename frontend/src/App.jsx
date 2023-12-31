import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, handleModal, selectPhoto, selectTopic, storeFavourites } =
    useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        state={state}
        openModal={handleModal}
        selectPhoto={selectPhoto}
        selectTopic={selectTopic}
        storeFavourites={storeFavourites}
      />
      {state.isModalOpen && (
        <PhotoDetailsModal
          state={state}
          closeModal={handleModal}
          selectPhoto={selectPhoto}
          storeFavourites={storeFavourites}
        />
      )}
    </div>
  );
};

export default App;
