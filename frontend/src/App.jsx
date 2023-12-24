import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState();

  function selectPhoto(photo) {
    setSelectedPhoto(photo);
  }

  function handleClick() {
    setIsModalOpen((prevIsModalOpen) => (prevIsModalOpen ? false : true));
  }

  return (
    <div className="App">
      <HomeRoute openModal={handleClick} selectPhoto={selectPhoto} />
      {isModalOpen && (
        <PhotoDetailsModal
          closeModal={handleClick}
          selectedPhoto={selectedPhoto}
        />
      )}
    </div>
  );
};

export default App;
