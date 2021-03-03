import React from 'react'; 
import playerData from '../../data/data.json';
import { useState,useEffect } from 'react'
import './player.css'
import Team from '../Team/Team'
import TeamBudget from '../TeamBudget/TeamBudget';


const Player = () => {
    const player15 = playerData.slice(0,15);
    const [players, setplayers] = useState(player15);

    const [cart,setCart] = useState([]);
    
    const handleSelectPlayer = (players) => {
        const newPlayer = [...cart, players];
        setCart(newPlayer);
        
    }

    useEffect(()=>{
        setplayers(playerData);
    },[])
    return (
        <div className='bpl-container'>
            <div className="player-container">
                    {
                        playerData.map(player => <Team player={player} key = {player.id} handleSelectPlayer = {handleSelectPlayer}></Team>)
                    }
            </div>
            <div className="selection-container">

                <TeamBudget cart = {cart} ></TeamBudget>
                
            </div>

            
        </div>
    );
};

export default Player;