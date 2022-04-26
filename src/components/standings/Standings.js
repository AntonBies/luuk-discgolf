import React from 'react';

export const Standings = ({player, holes, currentHole}) => {
  const untilHere = [...holes].filter(el => Number(el.hole) <= Number(currentHole.hole));
  const par = untilHere.reduce((prev, cur) => {
    return prev + cur.par;
  }, 0);
  let throws = untilHere.reduce((prev, cur) => {
    return prev + cur.scores[player.id];
  }, 0);

  return (
    <tr>
      <td>{player.name}</td>
      <td>{par}</td>
      <td>{isNaN(throws) ? "Vul eerst de scores op deze hole in" : throws}</td>
      <td>{isNaN(throws) ? "N/A" : throws - par}</td>
    </tr>
  );
}