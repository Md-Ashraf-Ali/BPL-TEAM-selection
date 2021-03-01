import React, { useState, useEffect } from 'react';
import './App.css';
import players from './data/data.json';
import Player from './components/Player/Player';

function App() {
  const [player, setplayer] = useState([])
  useEffect(() =>{
   setplayer(players);
  },[])

  return (
    <div className="App">
      <h2>loaded data : {players.length}</h2>
      <ul>
        {
          players.map(player=> <Player player = {player} key = {player.id} ></Player>)
        }
      </ul>
    </div>
  );
}

export default App;
