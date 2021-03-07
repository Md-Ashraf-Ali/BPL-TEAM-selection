import { library } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import './TeamBudget.css'

const TeamBudget = (props) => {
    const cart = props.cart;
    console.log(cart);
    const totalSalary = cart.reduce((total, player)=> total + player.salary, 0);
    
    return (
        <div>
            <h1>IPL Team Budget : </h1>
            <h3>Total Player: {cart.length}</h3>
            <h3>Total Budget: {totalSalary +  "tk"} </h3>
            <div className= "playerList">
                <h1>Selected player name list:</h1>
                <ol>
                    {
                        cart.map(element => <li>{element.name}</li>)
                    }
                </ol>
            </div>
        </div>
    );
};

export default TeamBudget;