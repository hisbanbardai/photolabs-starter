import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState();
  const [favourites, addFavourites] = useState([]);

  function storeFavourites(photo) {
    addFavourites((prevFavourites) => [...prevFavourites, photo]);
  }

  function selectPhoto(photo) {
    setSelectedPhoto(photo);
  }

  function handleClickPhoto() {
    setIsModalOpen((prevIsModalOpen) => (prevIsModalOpen ? false : true));
  }

  return (
    <div className="App">
      <HomeRoute
        openModal={handleClickPhoto}
        selectPhoto={selectPhoto}
        favourites={favourites}
        storeFavourites={storeFavourites}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          closeModal={handleClickPhoto}
          selectedPhoto={selectedPhoto}
          storeFavourites={storeFavourites}
        />
      )}
    </div>
  );
};

export default App;
