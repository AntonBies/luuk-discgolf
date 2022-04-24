import React from 'react';
import { useParams } from 'react-router-dom';

import "./Hole.css";

export const Hole = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Hole {id}</h1>
      <img src={`https://ik.imagekit.io/htjjbojy9/tr:w-800/${id}.jpg`} srcSet={`https://ik.imagekit.io/htjjbojy9/tr:w-400/${id}.jpg 400w, https://ik.imagekit.io/htjjbojy9/tr:w-800/${id}.jpg 800w, https://ik.imagekit.io/htjjbojy9/tr:w-1200/${id}.jpg 1200w, https://ik.imagekit.io/htjjbojy9/tr:w-1600/${id}.jpg 1600w`} alt="" /> 
      <h2>Scores</h2>
      <h2>Tussenstand</h2>
    </>
  );
}