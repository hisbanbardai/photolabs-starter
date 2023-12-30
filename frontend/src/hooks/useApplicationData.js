import { useReducer, useState, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SELECT_PHOTO: "SELECT_PHOTO",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
};

function reducer(state, action) {
  switch (action.type) {
    case "FAV_PHOTO_ADDED":
      return { ...state, favourites: [...state.favourites, action.payload] };
    case "FAV_PHOTO_REMOVED":
      const updatedFavourites = state.favourites.filter(
        (obj) => obj.id !== action.payload
      );
      return { ...state, favourites: updatedFavourites };
    case "SELECT_PHOTO":
      return { ...state, selectedPhoto: action.payload };
    case "CLOSE_MODAL":
      return { ...state, isModalOpen: false };
    case "OPEN_MODAL":
      return { ...state, isModalOpen: true };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

function useApplicationData() {
  const initialState = {
    isModalOpen: false,
    selectedPhoto: null,
    favourites: [],
    photoData: [],
    topicData: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos").then((res) =>
      res.json().then((data) => console.log(data))
    );
  }, []);

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState();
  // const [favourites, addFavourites] = useState([]);

  // const state = {
  //   isModalOpen,
  //   selectedPhoto,
  //   favourites,
  // };

  // function storeFavourites(photo) {
  //   addFavourites((prevFavourites) => [...prevFavourites, photo]);
  // }

  function storeFavourites(photo, isFavourtie) {
    console.log(isFavourtie);
    isFavourtie
      ? dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photo.id })
      : dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photo });
  }

  function handleModal(isOpen) {
    if (isOpen) {
      dispatch({ type: ACTIONS.OPEN_MODAL });
    } else {
      dispatch({ type: ACTIONS.CLOSE_MODAL });
    }
  }

  function selectPhoto(photo) {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  }

  // function selectPhoto(photo) {
  //   setSelectedPhoto(photo);
  // }

  // function handleClickPhoto() {
  //   setIsModalOpen((prevIsModalOpen) => (prevIsModalOpen ? false : true));
  // }

  return {
    state,
    handleModal,
    selectPhoto,
    storeFavourites,
  };
}

export default useApplicationData;
