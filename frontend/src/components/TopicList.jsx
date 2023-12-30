import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topicData }) => {
  const renderTopics = topicData.map((topic) => {
    return <TopicListItem key={topic.id} title={topic.title} />;
  });

  return <div className="top-nav-bar__topic-list">{renderTopics}</div>;
};

export default TopicList;
