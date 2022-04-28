import React from 'react';

export const Scores = ({player, currentHole, updateScore}) => {
  const playerScore = currentHole.scores[player.id] || '';
  const holeScore = playerScore ? playerScore - currentHole.par : "N/A";

  const handleChange = ({target}) => {
    const score = Number(target.value);
    if (score.isNaN) return;
    updateScore(player.id, score);
  }

  return (
    <tr>
      <td>{player.name}</td>
      <td>{currentHole.par}</td>
      <td><input onChange={handleChange} value={playerScore}></input></td>
      <td>{isNaN(holeScore) ? "N/A" : holeScore}</td>
    </tr>
  );
}