import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, handleModal, selectPhoto, storeFavourites } =
    useApplicationData();

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState();
  // const [favourites, addFavourites] = useState([]);

  // function storeFavourites(photo) {
  //   addFavourites((prevFavourites) => [...prevFavourites, photo]);
  // }

  // function selectPhoto(photo) {
  //   setSelectedPhoto(photo);
  // }

  // function handleClickPhoto() {
  //   setIsModalOpen((prevIsModalOpen) => (prevIsModalOpen ? false : true));
  // }

  // console.log(state.isModalOpen);
  return (
    <div className="App">
      <HomeRoute
        state={state}
        openModal={handleModal}
        selectPhoto={selectPhoto}
        // favourites={favourites}
        storeFavourites={storeFavourites}
      />
      {state.isModalOpen && (
        <PhotoDetailsModal
          state={state}
          closeModal={handleModal}
          // selectedPhoto={selectedPhoto}
          storeFavourites={storeFavourites}
        />
      )}
    </div>
  );
};

export default App;
