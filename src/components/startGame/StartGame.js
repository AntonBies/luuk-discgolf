import React from 'react';
import { holes } from '../holes/Holes.js';

import './StartGame.css';

export const StartGame = () => {

  return (
    <>
      <h1>Luuk's Discgolf course Frontenpark Maastricht</h1>
      {Object.keys(holes).map((key) => {
         return ( 
          <img key={key} className="galleryImage" src={`https://ik.imagekit.io/htjjbojy9/tr:w-200/${key}.jpg`} alt="" />
         ); 
      })}
    </>
  );
}