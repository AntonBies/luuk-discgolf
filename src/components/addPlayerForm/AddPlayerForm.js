import React, { useState } from 'react';
import { generateId } from "../../utilities.js";

import "./AddPlayerForm.css";

export const AddPlayerForm = ({addPlayer}) => {
  const [name, setName] = useState('');

  const handleChange = ({target}) => {
    setName(target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length > 0) {
      const id = generateId();
      const newPlayer = {
        id: id,
        name: name
      };
      addPlayer(newPlayer);
      setName('');
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="addPlayer">
          <input className="input-player" type="text" value={name} onChange={handleChange} />
          <button type="submit">Toevoegen</button>
        </div>
    </form>
    </>
  );
}