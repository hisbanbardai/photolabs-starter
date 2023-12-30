import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, title, selectTopic }) => {
  return (
    <div
      className="topic-list__item"
      onClick={() => {
        selectTopic(id);
      }}
    >
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
