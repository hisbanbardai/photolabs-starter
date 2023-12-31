import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({ state, selectTopic, favouritesCount }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={state.topicData} selectTopic={selectTopic} />
      <FavBadge isFavPhotoExist={favouritesCount > 0} />
    </div>
  );
};

export default TopNavigation;
