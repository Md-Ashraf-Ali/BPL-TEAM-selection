import React from 'react';
import './player.css'

const Player = (props) => {
    const {name, age,salary,image } = props.player;
    return (
        <div>
            <h1>Name :{name}</h1>
            <img src={image} alt=""/>
            <h3>Age: {age + 'year'}</h3>
            <h3>Salary: {salary + 'Tk'}</h3>
            
        </div>
    );
};

export default Player;