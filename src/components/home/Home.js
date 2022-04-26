import React from 'react';
import { Link } from 'react-router-dom';
import { Player } from '../player/Player.js';
import { AddPlayerForm } from '../addPlayerForm/AddPlayerForm.js';

import './Home.css';

export const Home = ({players, addPlayer, removePlayer, holes}) => {
  const initialPlayers = players && players.length;

  const removeData = () => {
    const confirm = window.confirm("Weet je zeker dat je alle data wilt verwijderen?");
    if (!confirm) return;
    localStorage.clear();
    window.location.reload();
  }

  return (
    <>
      <h1>Luuk's Discgolf course Frontenpark Maastricht</h1>
      <section className="players">
        <h2>Spelers</h2>
        {!initialPlayers ? <p>Voeg spelers toe</p> : players.map(el => <Player key={el.id} name={el.name} id={el.id}removePlayer={removePlayer} />)}
        <AddPlayerForm addPlayer={addPlayer} />
        <div className="space-between">
          <Link to="/holes/01">
            <button className="button">Start</button>
          </Link>
          <button className="button" onClick={removeData}>Verwijder alle opgeslagen data</button>
        </div>
      </section>
      <h2>Holes</h2>
      <section className="gallery">
        {holes.map(({hole}) => {
          return ( 
            <Link className="galleryImage" key={hole} to={`/holes/${hole}`}>
              <img src={`https://ik.imagekit.io/htjjbojy9/tr:w-300/${hole}.jpg`} alt="" />
              <p>{`Hole ${hole}`}</p>
            </Link>
          ); 
        })}
      </section>
    </>
  );
}