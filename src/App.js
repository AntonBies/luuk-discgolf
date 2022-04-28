import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import { Hole } from "./components/hole/Hole.js";
import { Home } from "./components/home/Home.js";
import { End } from "./components/end/End.js";
import Holes from "./components/holes/Holes.js";

function App() {
  let initialPlayers = localStorage.getItem('players');
  initialPlayers = initialPlayers ? JSON.parse(initialPlayers) : [];

  const [players, setPlayers ] = useState(initialPlayers);

  const addPlayer = (player) => {
    const newPlayers = [...players, player];
    localStorage.setItem('players', JSON.stringify(newPlayers));
    setPlayers(newPlayers);
  }

  const removePlayer = (id) => {
    const newPlayers = players.filter(el => el.id !== id);
    localStorage.setItem('players', JSON.stringify(newPlayers));
    setPlayers(newPlayers);
  }

  return (
    <main className="App">
      <Routes>
        <Route path="/holes/:holeId" element={<Hole players={players} holes={Holes} />} />
        <Route path="/end" element={<End players={players} holes={Holes} />} />
        <Route path="/" element={
        <Home 
          players={players}
          addPlayer={addPlayer}
          removePlayer={removePlayer}
          holes={Holes}
        />} />
      </Routes>
    </main>
  );
}

export default App;
