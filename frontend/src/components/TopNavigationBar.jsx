import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({ state, selectTopic, favouritesCount }) => {
  // console.log("Top navigation rendering");
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={state.topicData} selectTopic={selectTopic} />
      {/* {console.log("Favourites count", favouritesCount)} */}
      <FavBadge isFavPhotoExist={favouritesCount > 0} />
    </div>
  );
};

export default TopNavigation;
