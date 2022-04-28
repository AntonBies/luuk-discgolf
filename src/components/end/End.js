import React from 'react';
import { Link } from 'react-router-dom';
import { Standings } from '../standings/Standings.js';

export const End = ({players, holes}) => {
  const initialPlayers = players && players.length;
  const finalHole = holes[holes.length - 1];
  let prevId = `0${Number(finalHole.hole)}`.slice(-2);

  return (
    <>
      <h1>Einde van het spel</h1>
      { 
        initialPlayers ? (
          <>
            <section className="standings">
              <h2>Dit is de eindstand</h2>
              <table>
                <thead>
                  <tr>
                    <th>Naam</th>
                    <th>Par</th>
                    <th>Gegooid</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {players.map(player => <Standings key={player.id} player={player} holes={holes} currentHole={finalHole} />)}
                </tbody>
              </table>
            </section>
          </>
        ) :
          <p>Er zijn nog geen spelers ingevoerd voor dit spel.</p>
      }
      <section className="bottom-nav">
        <Link to={prevId ? `/holes/${prevId}` : '/'}>
          <button>BACK</button>
        </Link>
        <Link to="/">
          <button>HOME</button>
        </Link>
        <Link to="/">
          <button>NEXT</button>
        </Link>
      </section>
    
    </>
  );
}