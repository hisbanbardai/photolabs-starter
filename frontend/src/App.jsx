import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClick() {
    setIsModalOpen(true);
  }

  return (
    <div className="App">
      <HomeRoute openModal={handleClick} />
      {isModalOpen && <PhotoDetailsModal />}
    </div>
  );
};

export default App;
