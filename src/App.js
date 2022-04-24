import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Hole } from "./components/hole/Hole.js";

function App() {
  let initialPlayers = localStorage.getItem('players');
  initialPlayers = initialPlayers ? JSON.parse(initialPlayers) : [];

  const [players, setPlayers ] = useState(initialPlayers);

  return (
    <main className="App">
      <Routes>
        <Route path="/holes/:id" element={<Hole />} />
      </Routes>
    </main>
  );
}

export default App;
