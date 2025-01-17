import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SELECT_PHOTO: "SELECT_PHOTO",
  SELECT_TOPIC: "SELECT_TOPIC",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
};

function reducer(state, action) {
  // Logic to handle state transition based on action type
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
    case "SELECT_TOPIC":
      return { ...state, selectedTopic: action.payload };
    case "CLOSE_MODAL":
      return { ...state, isModalOpen: false };
    case "OPEN_MODAL":
      return { ...state, isModalOpen: true };
    case "SET_PHOTO_DATA":
      return { ...state, photoData: action.payload };
    case "SET_TOPIC_DATA":
      return { ...state, topicData: action.payload };
    case "GET_PHOTOS_BY_TOPICS":
      return { ...state, photoData: action.payload };
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
    selectedTopic: null,
    favourites: [],
    photoData: [],
    topicData: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //Get photo data
  useEffect(() => {
    fetch("/api/photos").then((res) =>
      res
        .json()
        .then((data) =>
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
        )
    );
  }, []);

  //Get topic data
  useEffect(() => {
    fetch("/api/topics").then((res) =>
      res
        .json()
        .then((data) =>
          dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })
        )
    );
  }, []);

  // Get photo data for specific topic
  useEffect(() => {
    if (state.selectedTopic) {
      fetch(`/api/topics/photos/${state.selectedTopic}`).then((res) =>
        res
          .json()
          .then((data) =>
            dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data })
          )
      );
    }
  }, [state.selectedTopic]);

  function storeFavourites(photo, isFavourtie) {
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

  function selectTopic(topicId) {
    dispatch({ type: ACTIONS.SELECT_TOPIC, payload: topicId });
  }

  return {
    state,
    handleModal,
    selectPhoto,
    selectTopic,
    storeFavourites,
  };
}

export default useApplicationData;
