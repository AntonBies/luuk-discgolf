import React from 'react';
import { Link } from 'react-router-dom';
import { holes } from '../holes/Holes.js';

import './StartGame.css';

export const StartGame = () => {
  return (
    <>
      <h1>Luuk's Discgolf course Frontenpark Maastricht</h1>
      {holes.map(({hole}) => {
        console.log(hole);
        return ( 
           <Link key={hole} to={`/holes/${hole}`}>
            <img className="galleryImage" src={`https://ik.imagekit.io/htjjbojy9/tr:w-200/${hole}.jpg`} alt="" />
          </Link>
         ); 
      })}
    </>
  );
}