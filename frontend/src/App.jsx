import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState();
  const [isFavSelected, setIsFavSelected] = useState(false);

  function handleClickFavBtn() {
    // setIsSelected(isSelected ? false : true);
    setIsFavSelected((prevIsFavSelected) => (prevIsFavSelected ? false : true));
    storeFavourites(photoData);
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
        clickFavBtn={handleClickFavBtn}
        isFavSelected={isFavSelected}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          closeModal={handleClickPhoto}
          selectedPhoto={selectedPhoto}
        />
      )}
    </div>
  );
};

export default App;
