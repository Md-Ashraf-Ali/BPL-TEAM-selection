import React from 'react';
import PlayerList from '../../components/PlayerList/PlayerList'


const TeamBudget = (props) => {
    const cart = props.cart;
    
    let Total = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        Total = Total + player.salary;
    }
     
    let Name = "";
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        Name = element.name;
        // Name = Name.concat(playerName);
        // console.log(Name);
    
    }

    
    
        
    return (
        <div>
            <h1> Total Team IPL Budget </h1>
            <h3>Total Player Number: {cart.length}</h3>
            <h3>Total Budget : {Total + "tk"}</h3>
            <PlayerList name={Name}></PlayerList>

        </div>
    );
};

export default TeamBudget;