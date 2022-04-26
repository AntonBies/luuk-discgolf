import React from 'react';

import "./Player.css";

export const Player = ({name, id, removePlayer}) => {
  const handleClick = (event) => {
    removePlayer(id);
  }
  return (
    <div className="player">
      <span>{name}</span>
      <i className="gg-close" onClick={handleClick}></i>
    </div>
  );
}