import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import { Hole } from "./components/hole/Hole.js";
import { StartGame } from "./components/startGame/StartGame.js";

function App() {
  let initialPlayers = localStorage.getItem('players');
  initialPlayers = initialPlayers ? JSON.parse(initialPlayers) : [];

  const [players, setPlayers ] = useState(initialPlayers);

  const addPlayers = (input) => {
    setPlayers(input)
  }

  return (
    <main className="App">
      <Routes>
        <Route path="/holes/:id" element={<Hole />} />
        <Route players={players} addPlayers={addPlayers} path="/" element={<StartGame />} />
      </Routes>
    </main>
  );
}

export default App;
