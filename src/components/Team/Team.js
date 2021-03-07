
import React from 'react';
import { useState } from 'react';
import Fakedata from '../Fakedata/data.json'
import PlayerList from '../PlayerList/PlayerList';
import TeamBudget from '../TeamBudget/TeamBudget';
import './Team.css'


const Team = () => {
    const first15 = Fakedata.slice(0,15);
   const [players, setPlayers] = useState(first15);

   const [cart, setcart] = useState([]);

   const addEvenHandler = (player) =>{
       const newcart = [...cart, player];
       setcart(newcart);
   }

    return (
        <div className="team-container">
                <div className="playerDetail-container">
                    {
                        players.map(player => <PlayerList player = {player} addEvenHandler = {addEvenHandler}></PlayerList>)
                    }
                    
                </div>
                <div className="card-container">
                    <TeamBudget cart ={cart}></TeamBudget>
                </div>
           
        </div>
        
    );
};

export default Team;