import React from 'react';
import './TeamBudget.css'


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
        const playerName = element.name;
        Name = Name.concat(playerName)+","+" ";
    }
    

    return (
        <div>
            <div className="budget">
            <h1> Total Team IPL Budget </h1>
            <h3>Total Player Number: {cart.length}</h3>
            <h3>Total Budget : {Total + "tk"}</h3>
            <h2>#selected player list:</h2>
            </div>
            <div className="nameList">
                <p>{Name}</p>
            </div>
        </div>
    );
};

export default TeamBudget;