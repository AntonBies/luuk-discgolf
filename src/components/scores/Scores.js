import React, { useState } from 'react';

export const Scores = ({player, currentHole, updateScore}) => {
  const [score, setScore] = useState(currentHole.scores[player.id])

  const handleChange = ({target}) => {
    const score = Number(target.value);
    if (score.isNaN) return;
    updateScore(player.id, score);
    setScore(score);
  }

  const holeScore = score - currentHole.par;

  return (
    <tr>
      <td>{player.name}</td>
      <td>{currentHole.par}</td>
      <td><input onChange={handleChange} value={score}></input></td>
      <td>{isNaN(holeScore) ? "N/A" : holeScore}</td>
    </tr>
  );
}