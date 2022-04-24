import React from 'react';
import { Link } from 'react-router-dom';
import { holes } from '../holes/Holes.js';

import './Home.css';

export const Home = ({players, addPlayers}) => {
  console.log(players);
  console.log(addPlayers);
  return (
    <>
      <h1>Luuk's Discgolf course Frontenpark Maastricht</h1>
      
      <h2>Holes</h2>
      <section className="gallery">
        {holes.map(({hole}) => {
          return ( 
            <Link className="galleryImage" key={hole} to={`/holes/${hole}`}>
              <img src={`https://ik.imagekit.io/htjjbojy9/tr:w-200/${hole}.jpg`} alt="" />
              <p>{`Hole ${hole}`}</p>
            </Link>
          ); 
        })}
      </section>
    </>
  );
}