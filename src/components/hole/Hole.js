import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Scores } from '../scores/Scores.js';
import { Standings } from '../standings/Standings.js';

import "./Hole.css";

export const Hole = ({players, holes}) => {
  const { holeId } = useParams();
  const [cheat, setCheat] = useState(false);
  const currentHole = holes.find(el => el.hole === holeId);
  const initialPlayers = players && players.length;

  const updateScore = (playerId, score) => {
    currentHole.scores[playerId] = score;
    const newHoles = [...holes];
    localStorage.setItem('holes', JSON.stringify(newHoles));
    setCheat(`${playerId}${score}`);
  }
  
  return (
    <>
      <h1>Hole {holeId}</h1>
      <img src={`https://ik.imagekit.io/htjjbojy9/tr:w-800/${holeId}.jpg`} srcSet={`https://ik.imagekit.io/htjjbojy9/tr:w-400/${holeId}.jpg 400w, https://ik.imagekit.io/htjjbojy9/tr:w-800/${holeId}.jpg 800w, https://ik.imagekit.io/htjjbojy9/tr:w-1200/${holeId}.jpg 1200w, https://ik.imagekit.io/htjjbojy9/tr:w-1600/${holeId}.jpg 1600w`} alt="" /> 
      { 
        initialPlayers ? (
          <>
            <section className="scores">
              <h2>Scores</h2>
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
                  {players.map(player => <Scores key={player.id} player={player} currentHole={currentHole} updateScore={updateScore} />)}
                </tbody>
              </table>
            </section>
            <section className="standings">
              <h2>Tussenstand</h2>
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
                  {players.map(player => <Standings key={player.id} player={player} holes={holes} currentHole={currentHole} cheat={cheat} />)}
                </tbody>
              </table>
            </section>
          </>
        ) :
          <p>Er zijn nog geen spelers ingevoerd voor dit spel.</p>
      }
    </>
  );
}