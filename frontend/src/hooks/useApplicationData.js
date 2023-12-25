import { useState } from "react";

function useApplicationData() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState();
  const [favourites, addFavourites] = useState([]);

  const state = {
    isModalOpen,
    selectedPhoto,
    favourites,
  };

  function storeFavourites(photo) {
    addFavourites((prevFavourites) => [...prevFavourites, photo]);
  }

  function selectPhoto(photo) {
    setSelectedPhoto(photo);
  }

  function handleClickPhoto() {
    setIsModalOpen((prevIsModalOpen) => (prevIsModalOpen ? false : true));
  }

  return {
    state,
    handleClickPhoto,
    selectPhoto,
    storeFavourites,
  };
}

export default useApplicationData;
